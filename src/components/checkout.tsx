"use client"
import useCart from "@/hooks/useCart"
import Payment from "./payment"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./tabs"
import { initMercadoPago } from "@mercadopago/sdk-react"
import { useState, useMemo } from "react"
import Auth from "./auth"
import { get_unit_amount } from "@/utils/helpers"
import useSupabaseSession from "@/hooks/useSupabaseSession"
import Status from "./status"

const Checkout = () => {
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_ID || "");
  const {user} = useSupabaseSession()
  
  const {items, clearCart} = useCart()
  const [paymentId, setPaymentId] = useState("");
  const [active, setActive] = useState("tab0")
  const amount = useMemo(() => items?.reduce((acc, curr) => acc + get_unit_amount(curr.description, curr.unit_price) * curr.quantity, 0), [items])

  return (
    <Tabs value={active} onValueChange={(value) => setActive(value)}>
      <TabsList className="grid w-full grid-cols-3 rounded-none rounded-t-md" variant="solid">
        <TabsTrigger className="outline-none" value="tab0">Identificação</TabsTrigger>
        <TabsTrigger disabled={!user?.user_metadata.email && !user?.user_metadata.phone} className="outline-none" value="tab1">Pagamento</TabsTrigger>
        <TabsTrigger disabled={!paymentId} className="outline-none" value="tab2">Status</TabsTrigger>
      </TabsList>
      <div className="p-4 bg-white rounded-b-md">
        <TabsContent className="outline-none" value="tab0">
          <Auth setActive={setActive} isCheckout />
        </TabsContent>
        <TabsContent className="outline-none" value="tab1">
          <Payment setPaymentId={setPaymentId} setActive={setActive} items={items} amount={amount} clearCart={clearCart} />
        </TabsContent>
        <TabsContent className="outline-none" value="tab2">
          <Status paymentId={paymentId} />
        </TabsContent>
      </div>
    </Tabs>

  )
}

export default Checkout