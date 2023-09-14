import client from "@sendgrid/client";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, list } = req.body;
  const SENDGRID_LIST =
    list === "contact"
      ? process.env.SENDGRID_CONTACT_LIST_KEY
      : process.env.SENDGRID_NEWSLETTER_LIST_KEY;
  const data = {
    list_ids: [SENDGRID_LIST],
    contacts: [
      {
        email: email,
        first_name: name,
      },
    ],
  };

  client.setApiKey(process.env.SENDGRID_API_KEY || "");
  client
    .request({
      url: "/v3/marketing/contacts",
      method: "PUT",
      body: data,
    })
    .then(([response]) => {
      res
        .status(response.statusCode)
        .send("Vous recevrez désormais toute notre actualité");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
}
