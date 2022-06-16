import { GraphQLClient, gql } from "graphql-request";
import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const graphqlAPI = process.env.NEXT_PUBLIC_BLUGENIX_BLOG
const graphCmsToken = process.env.GRAPHCMS_TOKEN

export default async function handler(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCmsToken}`
    }
  })

  // const commentObj = { name, email, comment, slug }
  const { name, email, comment } = req.body
  const message = `
  <h3>BLUGENIX BLOG HAS RECEIVED A NEW COMMENT!\r\n
  \r\n
  Go to <a href="https://graphcms.com/" target="_blank">GraphCMS</a> to login and review NEW POSTED CONTENT.\r\n
  \r\n
  Comment submitted by: \r\n
    Name: ${name}\r\n
    Email: ${email}\r\n
    Comment: ${comment}\r\n
  \r\n
  New comments will show in the Content Section as a DRAFT under Comment.\r\n
  \r\n
  </h3>
  `
  const thanks = `<h3>Hi ${name},\r\n
    \r\n
     Thank you for submitting a comment on Blugenix's Blog!\r\n
     \r\n
     Once approved, your comment will appear on the Blog Post that you made your comment.\r\n
     \r\n
     Thank you,\r\n
     \r\n
     Blugenix\r\n</h3>
     `;

  const data = [{
    to: "jesseblue4242@gmail.com",
    from: "chris.blugenix@gmail.com",
    subject: "NEW BLUGENIX BLOG POST COMMENT",
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  },
  {
    to: email,
    from: "chris.blugenix@gmail.com",
    subject: "BLUGENIX BLOG POST COMMENT RECEIVED",
    text: thanks,
    html: thanks.replace(/\r\n/g, "<br>"),
  }]

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) { id }
    }
  `
  try {
    await graphQLClient.request(query, req.body)
    await sgMail.send(data).then(() => {
      console.log("emails sent successfully");
    }).catch((error) => {
      console.log(error);
    })

    return res.status(200).send({ message: "Comment Submitted" })
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    })
  }
}