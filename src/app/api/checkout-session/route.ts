import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
    appInfo: {
      // For sample support and debugging, not required for production:
      name: "stripe-samples/checkout-one-time-payments",
      version: "0.0.1",
      url: "https://github.com/stripe-samples/checkout-one-time-payments",
    },
  });
  const requestUrl = new URL(request.url);
  const sessionId = requestUrl.searchParams.get("session_id");
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  //console.log(session);
  return NextResponse.json({ session }, { status: 200 });
}
