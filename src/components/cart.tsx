"use client"
import useCart from "@/hooks/useCart"
import { get_unit_amount, getQuantity } from "@/utils/helpers"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Icon } from "@tremor/react"
import { CldImage } from "next-cloudinary"
import { memo } from "react"
import CheckoutButton from "./checkout-button"

const Cart = () => {
    const {items, removeFromCart, amount} = useCart()

    return (
    items?.length ? 
        <>
        <form action="/api/checkout" method="post">
        {items.map((item, key) => {
            const {id, unit_price, checkin, checkout, number_adults, number_children, picture_url, title, quantity} = item
            const subTotal = get_unit_amount({unit_price, checkin, checkout}) * quantity
            const booked_days = getQuantity(checkin, checkout)
            return (
            <div key={key} className="mt-8">
                <h3 className="bg-secondary p-2 flex justify-between items-center flex-wrap text-white">
                    <span className="flex items-center">
                        {picture_url && <CldImage
                            width="50"
                            height="50"
                            src={picture_url} alt={""}
                            className="mr-2"
                        />}
                        <strong>{title || ""}</strong>
                    </span>
                    <Icon icon={XMarkIcon} className="cursor-pointer text-white" onClick={() => removeFromCart(id)}></Icon>
                </h3>
                <div className="flex justify-between p-2">
                    <strong>Diárias: {booked_days}</strong>
                    <strong>Preço: {unit_price * quantity}</strong>
                </div>
                {checkin && checkout && 
                    <>
                        <div className="flex justify-between p-2 text-sm">
                            <strong>Adultos: {number_adults}</strong>
                            <strong>Quartos: {quantity}</strong>
                            <strong>Crianças: {number_children}</strong>
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