import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || "",
      options: {
        integratorId: process.env.MERCADO_PAGO_INTEGRATOR_ID,
      },
    });

    const payment = new Payment(client);
    const response = await payment.create({ body });
    console.log(response);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(error, { status: 500 });
  }
}
