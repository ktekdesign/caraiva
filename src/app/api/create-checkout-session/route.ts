import { getQuantity } from "@/utils/helpers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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
  const formData = await request.formData();
  const products_id = formData.getAll("product_id");
  const starts = formData.getAll("start");
  const ends = formData.getAll("end");
  const metadatas = formData.getAll("metadata");
  const metadata = metadatas.map((data) => JSON.parse(data.toString()));
  console.log(metadata);
  const line_items = products_id.map((price, key) => ({
    price,
    quantity: getQuantity(starts[key].toString(), ends[key].toString()),
  }));

  /*const booked_days = moment(end?.toString()).diff(
    moment(start?.toString()),
    "days"
  );*/

  const domainURL = process.env.DOMAIN;

  // Create new Checkout Session for the order
  // Other optional params include:
  // [billing_address_collection] - to display billing address details on the page
  // [customer] - if you have an existing Stripe Customer ID
  // [customer_email] - lets you prefill the email input in the Checkout page
  // [automatic_tax] - to automatically calculate sales tax, VAT and GST in the checkout page
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    phone_number_collection: {
      enabled: true,
    },
    customer_creation: "always",
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled`,
    // automatic_tax: {enabled: true},
  });

  return NextResponse.redirect(session.url, { status: 301 });
}
