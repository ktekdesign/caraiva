import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(request: Request) {
  const items = await request.json();

  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || "",
      options: {
        integratorId: process.env.MERCADO_PAGO_INTEGRATOR_ID,
      },
    });

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items,
        payment_methods: {
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
