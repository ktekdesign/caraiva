"use client"
import useCart from "@/hooks/useCart"
import { get_unit_amount } from "@/utils/helpers"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Button, Icon } from "@tremor/react"
import { CldImage } from "next-cloudinary"
import { memo, useEffect, useState } from "react"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const Cart = () => {
    initMercadoPago('APP_USR-8b35e57d-7a2e-4e3c-b67a-b13eed9285c4');
    const {items, removeFromCart} = useCart()
    const [preferenceId, setPreferenceId] = useState("")

    useEffect(() => {
        if (items?.length) {
            fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(items)
            })
            .then(res => res.json())
            .then(data => setPreferenceId(data.id))
        }
    }, [items])
    return (
    items?.length ? 
        <form action="/api/checkout" method="post">
        {items.map((item, key) => {
            const metadata = JSON.parse(item.description || "{}")
            return (
            <div key={key} className="mt-8">
                <h3 className="bg-tertiary p-2 rounded-md flex justify-between items-center flex-wrap">
                    <span className="flex items-center">
                        <CldImage
                            width="50"
                            height="50"
                            src={item.picture_url || ""} alt={""}
                            className="mr-2"
                        />
                        <strong>{item.title || ""}</strong>
                    </span>
                    <Icon icon={XMarkIcon} className="cursor-pointer" onClick={() => removeFromCart(item.id)}></Icon>
                </h3>
                <div className="flex justify-between p-2">
                    <strong>Diárias: {item.quantity}</strong>
                    <strong>Preço: {get_unit_amount(metadata?.checkin, metadata?.checkout)}</strong>
                </div>
                {metadata && 
                    <>
                        <div className="flex justify-between p-2">
                            <strong>Adultos: {metadata.number_adults?.toString()}</strong>
                            <strong>Crianças: {metadata.number_children?.toString()}</strong>
                        </div>
                        <div className="p-2">
                            <small>Checkin: {metadata.checkin}</small><br />
                            <small>Checkout: {metadata.checkout}</small>
                        </div>
                    </>
                }
                <div className="flex justify-between bg-slate-200 p-2 rounded-md">
                    <strong>Total</strong>
                    <strong>{get_unit_amount(metadata?.checkin, metadata?.checkout) * item.quantity}</strong>
                </div>
            </div>
            )}
        )}
        <div className="text-center py-4">
            <div id="wallet_container"></div>
            {preferenceId && <Wallet initialization={{ preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
        </div>
        </form>
    :
        <p className="font-bold px-8 py-16">Não fez nemhuma reserva ainda</p>
    )
}

export default memo(Cart)