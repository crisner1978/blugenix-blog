import dbConnect from "../../lib/dbConnect"
import Consult from "../../models/consultModel";
import sgMail from "@sendgrid/mail"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect()

    const body = req.body
    let fullName = body.firstName + body.lastName

    const message = `
    Name: ${fullName}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}\r\n
  `;
    const thanks = `<h3>Hi ${fullName},\r\n
    \r\n
     Thank you for contacting us about hormone replacement therapy.\r\n
     \r\n
     After reviewing your message, one of our advisors will contact you.\r\n
     \r\n
     Thank you,\r\n
     \r\n
     Blugenix\r\n</h3>
     `;

    const data = [{
      to: "jesseblue4242@gmail.com",
      from: "chris.blugenix@gmail.com",
      subject: "NEW LEAD FOR HRT",
      text: message,
      html: message.replace(/\r\n/g, '<br>')
    },
    {
      to: body.email,
      from: "chris.blugenix@gmail.com",
      subject: "Consultation Request Received",
      text: thanks,
      html: thanks.replace(/\r\n/g, "<br>"),
    }]

    // await mail.send(data).then(() => {
    //   console.log("emails sent successfully");
    // }).catch((error) => {
    //   console.log(error);
    // })


    try {
      await Consult.create(body)
      await sgMail.send(data)

      return res.status(200).json({ message: "Consult has been requested", success: true })
    } catch (error) {
      res.status(500).json({
        message: error.message,
        success: false,
      })
    }
  }
}

