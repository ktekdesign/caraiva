import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

export async function POST(request: Request) {
  const { type, data } = await request.json();

  try {
    const client = new MercadoPagoConfig({
      accessToken:
        "APP_USR-2321818572140042-082618-5e9b37a944126b35d92777104dae95a6-1962251723",
      options: {
        integratorId: "dev_24c65fb163bf11ea96500242ac130004",
      },
    });
    const payment = new Payment(client);
    if (type === "payment") {
      const response = await payment.get({ id: data.id });
      return NextResponse.json(response, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
