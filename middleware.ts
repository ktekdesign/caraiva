import { NextResponse } from "next/server";

export const config = {
  matcher: "/api/check-availability",
};
// This is the demo secret key. In production, we recommend
// you store your secret key(s) safely.
const CAPCHA_SECRET_KEY = process.env.CAPCHA_SECRET_KEY;
export default async function middleware(request: Request) {
  const { captchaToken } = await request.json();
  // Turnstile injects a token in "cf-turnstile-response".
  const ip = request.headers.get("CF-Connecting-IP");
  // Validate the token by calling the
  // "/siteverify" API endpoint.
  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    body: JSON.stringify({
      secret: CAPCHA_SECRET_KEY,
      response: captchaToken,
      remoteip: ip,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const outcome = await result.json();
  console.log(outcome);
  if (outcome.success) {
    NextResponse.next();
  }
}
