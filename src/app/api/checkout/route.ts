import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(request: Request) {
  const items = await request.json();

  try {
    const client = new MercadoPagoConfig({
      accessToken:
        "APP_USR-2321818572140042-082618-5e9b37a944126b35d92777104dae95a6-1962251723",
      options: {
        integratorId: "dev_24c65fb163bf11ea96500242ac130004",
      },
    });

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items,
        payment_methods: {
          excluded_payment_methods: [
            {
              id: "visa",
            },
          ],
          installments: 6,
        },
        back_urls: {
          success: "https://www.experimentecaraiva.com.br/payment/success",
          failure: "https://www.experimentecaraiva.com.br/payment/failure",
          pending: "https://www.experimentecaraiva.com.br/payment/pending",
        },
        external_reference: "contact@ktekdesign.com",
        notification_url:
          "https://www.experimentecaraiva.com.br/webhooks/sandbox",
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
