"use client"
import { initMercadoPago } from "@mercadopago/sdk-react"
import { useState } from "react"
import {Auth, Status, Tabs, TabsContent, TabsList, TabsTrigger, Payment} from "components"
import {useSupabaseSession} from "hooks"

const Checkout = () => {
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_ID || "");
  const {user} = useSupabaseSession()
  
  const [paymentId, setPaymentId] = useState("");
  const [active, setActive] = useState("tab0")

  return (
    <Tabs value={active} onValueChange={(value) => setActive(value)}>
      <TabsList className="grid w-full grid-cols-3 rounded-none rounded-t-md" variant="solid">
        <TabsTrigger disabled={!!user} className="outline-none" value="tab0">Identificação</TabsTrigger>
        <TabsTrigger disabled={!user?.user_metadata.email && !user?.user_metadata.phone} className="outline-none" value="tab1">Pagamento</TabsTrigger>
        <TabsTrigger disabled={!paymentId} className="outline-none" value="tab2">Status</TabsTrigger>
      </TabsList>
      <div className="p-4 bg-white rounded-b-md">
        <TabsContent className="outline-none" value="tab0">
          <Auth setActive={setActive} isCheckout />
        </TabsContent>
        <TabsContent className="outline-none" value="tab1">
          <Payment setPaymentId={setPaymentId} setActive={setActive} />
        </TabsContent>
        <TabsContent className="outline-none" value="tab2">
          <Status paymentId={paymentId} />
        </TabsContent>
      </div>
    </Tabs>

  )
}

export default Checkout