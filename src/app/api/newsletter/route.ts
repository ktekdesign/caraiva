import client from "@sendgrid/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name, list } = await req.json();

  const data = {
    list_ids: [list],
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
      NextResponse.json(
        { message: "Vous recevrez désormais toute notre actualité" },
        { status: response.statusCode }
      );
    })
    .catch((error) => {
      NextResponse.json({ error: error.message }, { status: 500 });
    });
}
