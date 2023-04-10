import FormData from "form-data";
import fs from "fs";
import { gql, GraphQLClient } from "graphql-request";
import initMiddleware from "../../lib/init-middleware";
import parseMultipartForm from "../../lib/multipartParser";
import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Turn bodyParser OFF
export const config = {
  api: {
    bodyParser: false
  }
}

// Define Middleware
const multipartParser = initMiddleware(parseMultipartForm)
const graphqlAPI = process.env.NEXT_PUBLIC_BLUGENIX_BLOG
const graphCmsToken = process.env.GRAPHCMS_TOKEN


export default async function handler(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCmsToken}`
    }
  })
  // initialize Middleware
  await multipartParser(req, res)

  // file upload to GraphCMS
  const { file_1 } = req.files
  
  const form = new FormData()
  form.append("fileUpload", fs.createReadStream(file_1.filepath))
  const upload = await fetch(`${graphqlAPI}/upload`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${graphCmsToken}`
    },
    body: form,
  }).then((response) => response.json())

  // create object for mutation
  const { name, message, email } = req.body
  let id = upload.id
  const testimonialObject = { name, message, id }

  const emailMessage = `
  <h3>BLUGENIX HAS RECEIVED A NEW TESTIMONIAL!\r\n
  \r\n
  Go to <a href="https://graphcms.com/" target="_blank">GraphCMS</a> to login and review NEWLY POSTED CONTENT.\r\n
  \r\n
  Testimonial submitted by: \r\n
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}\r\n
  \r\n
  New testimonials will show in the Content Section as a DRAFT under Testimonial Card.\r\n
  \r\n
  </h3>
  `
  const thanks = `<h3>Hi ${name},\r\n
    \r\n
     Thank you for sharing your story with Blugenix!\r\n
     \r\n
     Once approved, your testimonial will appear at the bottom of the Therapies Page in the Testimonial Section.\r\n
     \r\n
     Thanks again,\r\n
     \r\n
     Blugenix\r\n</h3>
     `;
  const data = [{
    to: "jesseblue4242@gmail.com",
    from: "chris.blugenix@gmail.com",
    subject: "NEW BLUGENIX TESTIMONIAL",
    text: emailMessage,
    html: emailMessage.replace(/\r\n/g, '<br>')
  },
  {
    to: email,
    from: "chris.blugenix@gmail.com",
    subject: "BLUGENIX TESTIMONIAL RECEIVED",
    text: thanks,
    html: thanks.replace(/\r\n/g, "<br>"),
  }]

  const query = gql`
    mutation createTestimonialCard($name: String!, $message: String!, $id: ID!) {
      createTestimonialCard(data: {name: $name, message: $message, image: {connect: {id: $id} } }) { id }
    }
  `
  try {
    await graphQLClient.request(query, testimonialObject)
    await sgMail.send(data).then(() => {
      console.log("emails sent successfully");
    }).catch((error) => {
      console.error(error);
    })

    return res.status(200).send({ message: "Testimonial Submitted" })
  } catch (error) {
    console.error(error)
  }
}