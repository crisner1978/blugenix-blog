import FormData from "form-data";
import fs from "fs";
import initMiddleware from "../../lib/init-middleware";
import parseMultipartForm from "../../lib/multipartParser";
import { GraphQLClient, gql } from "graphql-request";

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

  // define variables
  const { file_1, file_2 } = req.files
  const { name, message } = req.body

  const form = new FormData()
  form.append("fileUpload", fs.createReadStream(file_1.filepath))
  if (file_2 !== undefined) {
    form.append("fileUpload", fs.createReadStream(file_2.filepath))
  }

  const upload = await fetch(`${graphqlAPI}/upload`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${graphCmsToken}`
    },
    body: form,
  }).then((response) => response.json())

  // let handle = upload.url.replace("https://media.graphassets.com/", "")
  // let filename = upload.filename
  let id = upload.id
  console.log("upload", upload)

  const testimonialObject = { name, message, id }

  const query = gql`
    mutation createTestimonialCard($name: String!, $message: String!, $id: ID!) {
      createTestimonialCard(data: {name: $name, message: $message, image: {connect: {id: $id} } }) { id }
    }
  `
  try {
    const result = await graphQLClient.request(query, testimonialObject)
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
  }
  // res.status(200).send("Upload Your Testimonial To GraphCMS")
}