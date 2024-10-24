import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

export async function POST(request: Request) {
  const { type, data } = await request.json();

  try {
    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || "",
      options: {
        integratorId: process.env.MERCADO_PAGO_INTEGRATOR_ID,
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
