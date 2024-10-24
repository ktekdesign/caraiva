import { NextResponse } from "next/server";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//import { QueryData } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const supabase = createClientComponentClient();
  const { checkin, checkout, quantity } = await request.json();

  try {
    const availabilityQuery = supabase
      .from("availability")
      .select(
        `
            prices (
            id,
            name,
            description,
            unit_amount,
            amount_variant,
            products (
                name,
                description
            )
            )
        `
      )
      .lte("init_date", checkin)
      .gte("end_date", checkout)
      .gte("quantity", quantity)
      .order("updated_at", { ascending: false })
      .single();

    //type Availability = QueryData<typeof availabilityQuery>;

    const { data, error } = await availabilityQuery;
    if (error) {
      console.log(error);
      return NextResponse.json(error, { status: 500 });
    }

    //const availability: Availability = data;
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
