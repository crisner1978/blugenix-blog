import FormData from "form-data";
import fs from "fs";
import { gql, GraphQLClient } from "graphql-request";
import initMiddleware from "../../lib/init-middleware";
import parseMultipartForm from "../../lib/multipartParser";

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
  const { name, message } = req.body
  let id = upload.id
  const testimonialObject = { name, message, id }

  const query = gql`
    mutation createTestimonialCard($name: String!, $message: String!, $id: ID!) {
      createTestimonialCard(data: {name: $name, message: $message, image: {connect: {id: $id} } }) { id }
    }
  `
  try {
    await graphQLClient.request(query, testimonialObject)
    return res.status(200).send({ message: "Testimonial Submitted" })
  } catch (error) {
    console.log(error)
  }
}