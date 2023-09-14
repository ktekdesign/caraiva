import { NextApiRequest, NextApiResponse } from "next";
import MailService from "@sendgrid/mail";

MailService.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, number, subject, text } = req.body;
  const data = {
    to: "contact@ktekdesign.com",
    from: `${name}<contact@ktekdesign.com>`,
    replyTo: email,
    subject: subject,
    text: text,
    html: `
                <b>From:</b> ${name} <br /> 
                <b>Number:</b> ${number} <br /> 
                <b>Message:</b> ${text} 
            `,
  };

  try {
    await MailService.send(data);
    res.status(200).send("Email envoyé");
  } catch (error) {
    res.status(500).send("Error proccessing charge");
  }
}
