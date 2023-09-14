import MailService from "@sendgrid/mail";
import { NextResponse, NextRequest } from "next/server";

MailService.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: NextRequest) {
  const { name, email, number, subject, text } = await req.json();
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
    NextResponse.json({ message: "Email envoyé" }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Error proccessing charge" }, { status: 500 });
  }
}
