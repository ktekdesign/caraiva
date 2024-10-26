import { NextResponse } from "next/server";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//import { QueryData } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const supabase = createClientComponentClient();
  const { checkin, checkout, quantity } = await request.json();

  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
            id,
            name,
            description,
            metadata,
            prices (
            id,
            name,
            description,
            unit_amount,
            amount_variant,
            availability (
                init_date,
                end_date,
                quantity
            )
            )
        `
      )
      .lte("prices.availability.init_date", checkin)
      .gte("prices.availability.end_date", checkout)
      .gte("prices.availability.quantity", quantity)
      .eq("category", "HOSTING");

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json(
      data.filter(
        (res) =>
          res.prices.filter((product) => product.availability.length).length
      ),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
