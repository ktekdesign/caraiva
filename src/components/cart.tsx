"use client"
import useCart from "@/hooks/useCart"
import { get_unit_amount, getQuantity } from "@/utils/helpers"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Icon } from "@tremor/react"
import { CldImage } from "next-cloudinary"
import { memo, useMemo } from "react"
import { initMercadoPago } from '@mercadopago/sdk-react'
import CheckoutButton from "./checkout-button"

const Cart = () => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_ID || "");
    const {items, removeFromCart} = useCart()
    //const [preferenceId, setPreferenceId] = useState("")
    const amount = useMemo(() => items?.reduce((acc, curr) => acc + get_unit_amount(curr.description, curr.unit_price) * curr.quantity, 0), [items])
  
    // useEffect(() => {
    //     if (items?.length) {
    //         fetch("/api/checkout", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(items)
    //         })
    //         .then(res => res.json())
    //         .then(data => setPreferenceId(data.id))
    //     }
    // }, [items])

    return (
    items?.length ? 
        <>
        <form action="/api/checkout" method="post">
        {items.map(({id, unit_price, description, picture_url, title, quantity}, key) => {
            const metadata = JSON.parse(description || "{}")
            const {checkin, checkout, number_adults, number_children} = metadata
            const subTotal = get_unit_amount(description, unit_price) * quantity
            const booked_days = getQuantity(checkin, checkout)
            return (
            <div key={key} className="mt-8">
                <h3 className="bg-secondary p-2 flex justify-between items-center flex-wrap text-white">
                    <span className="flex items-center">
                        <CldImage
                            width="50"
                            height="50"
                            src={picture_url || ""} alt={""}
                            className="mr-2"
                        />
                        <strong>{title || ""}</strong>
                    </span>
                    <Icon icon={XMarkIcon} className="cursor-pointer text-white" onClick={() => removeFromCart(id)}></Icon>
                </h3>
                <div className="flex justify-between p-2">
                    <strong>Diárias: {booked_days}</strong>
                    <strong>Preço: {unit_price * quantity}</strong>
                </div>
                {metadata && 
                    <>
                        <div className="flex justify-between p-2 text-sm">
                            <strong>Adultos: {number_adults}</strong>
                            <strong>Quartos: {quantity}</strong>
                            {number_children && <strong>Crianças: {number_children}</strong>}
                        </div>
                        <div className="p-2">
                            <small>Checkin: {Intl.DateTimeFormat("pt-BR").format(new Date(checkin))}</small><br />
                            <small>Checkout: {Intl.DateTimeFormat("pt-BR").format(new Date(checkout))}</small>
                        </div>
                    </>
                }
                <div className="flex justify-between bg-slate-200 p-2">
                    <strong>Sub-Total</strong>
                    <strong>{subTotal}</strong>
                </div>
            </div>
            )}
        )}
        <div className="flex justify-between bg-secondary p-2 mt-4 text-white">
            <strong>Total</strong>
            <strong>{amount}</strong>
        </div>
        </form>
        <CheckoutButton />
        </>
    :
        <p className="font-bold px-8 py-16">Não fez nemhuma reserva ainda</p>
    )
}

export default memo(Cart)