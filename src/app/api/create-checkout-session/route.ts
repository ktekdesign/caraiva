//import { getQuantity, get_unit_amount } from "@/utils/helpers";
import { NextResponse } from "next/server";
//import { parseISO } from "date-fns";
export async function POST() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  //   apiVersion: "2020-08-27",
  //   appInfo: {
  //     // For sample support and debugging, not required for production:
  //     name: "stripe-samples/checkout-one-time-payments",
  //     version: "0.0.1",
  //     url: "https://github.com/stripe-samples/checkout-one-time-payments",
  //   },
  // });
  // const formData = await request.formData();
  // const products_id = formData.getAll("product_id");
  // const checkins = formData.getAll("checkin");
  // const checkouts = formData.getAll("checkout");
  // // const number_adults = formData.getAll("number_adults");
  // // const number_children = formData.getAll("number_children");

  // const line_items = products_id.map((product, key) => {
  //   const checkin = parseISO(checkins[key].toString());
  //   const checkout = parseISO(checkouts[key].toString());
  //   const quantity = getQuantity(checkin, checkout);

  //   const line_item = {
  //     quantity,
  //     /*metadata: {
  //       checkin: checkins[key].toString(),
  //       checkout: checkouts[key].toString(),
  //       number_adults: number_adults[key].toString(),
  //       number_children: number_children[key].toString(),
  //     }*/
  //   };

  //   return {
  //     ...line_item,
  //     price_data: {
  //       currency: "brl",
  //       product: "prod_OUgHRLTz8fEJhT",
  //       unit_amount: get_unit_amount(checkin, checkout) * 100,
  //     },
  //   };
  // });

  // /*const metadata = line_items.map(line_item => ({
  //   line_item.metadata
  // }))*/
  // /*const booked_days = moment(checkout?.toString()).diff(
  //   moment(checkin?.toString()),
  //   "days"
  // );*/

  // const domainURL = process.env.DOMAIN;

  // // Create new Checkout Session for the order
  // // Other optional params include:
  // // [billing_address_collection] - to display billing address details on the page
  // // [customer] - if you have an existing Stripe Customer ID
  // // [customer_email] - lets you prefill the email input in the Checkout page
  // // [automatic_tax] - to automatically calculate sales tax, VAT and GST in the checkout page
  // // For full details see https://stripe.com/docs/api/checkout/sessions/create
  // const session = await stripe.checkout.sessions.create({
  //   mode: "payment",
  //   line_items,
  //   phone_number_collection: {
  //     enabled: true,
  //   },
  //   customer_creation: "always",
  //   // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
  //   success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${domainURL}/canceled`,
  //   // automatic_tax: {enabled: true},
  // });

  //return NextResponse.redirect(session.url, { status: 301 });
  return NextResponse.json({}, { status: 200 });
}
