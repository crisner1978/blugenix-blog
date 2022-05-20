import dbConnect from "../../lib/dbConnect"
import Consult from "../../models/consultModel";

export default async function handler(req, res) {
  await dbConnect()

  const body = req.body
  console.log("body", body)

  try {
    await Consult.create(body)
    return res.status(200).json({ message: "Consult has been sent", success: true })
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    })
  }
}

