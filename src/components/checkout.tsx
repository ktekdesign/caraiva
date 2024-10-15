"use client"
import useCart from "@/hooks/useCart"
import Payment from "./payment"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./tabs"
import { StatusScreen } from "@mercadopago/sdk-react"
import { useState } from "react"
import Auth from "./auth"

const Checkout = () => {
  const {items, payer} = useCart()
  const [paymentId, setPaymentId] = useState("");
  const [active, setActive] = useState("tab0")

  return (
    <Tabs value={active} onValueChange={(value) => setActive(value)}>
      <TabsList className="grid w-full grid-cols-3 rounded-none rounded-t-md" variant="solid">
        <TabsTrigger className="outline-none" value="tab0">Identificação</TabsTrigger>
        <TabsTrigger disabled={!payer?.email && !payer?.phone?.number} className="outline-none" value="tab1">Pagamento</TabsTrigger>
        <TabsTrigger disabled={!paymentId} className="outline-none" value="tab2">Status</TabsTrigger>
      </TabsList>
      <div className="p-4 bg-white rounded-b-md">
        <TabsContent className="outline-none" value="tab0">
          <Auth setActive={setActive} isCheckout />
        </TabsContent>
        <TabsContent className="outline-none" value="tab1">
          {items?.length && <Payment setPaymentId={setPaymentId} setActive={setActive} payer={payer} />}
        </TabsContent>
        <TabsContent className="outline-none" value="tab2">
          {paymentId && <StatusScreen initialization={{
            paymentId
          }}
          onError={console.log}
          onReady={console.log} />}
        </TabsContent>
      </div>
    </Tabs>

  )
}

export default Checkout