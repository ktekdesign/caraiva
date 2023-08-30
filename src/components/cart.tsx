"use client"
import useCart from "@/hooks/useCart"
import { XIcon } from "@heroicons/react/solid"
import { Button, Icon } from "@tremor/react"
import { CldImage } from "next-cloudinary"
import { memo } from "react"

const Cart = () => {
    const {items, removeFromCart} = useCart()
    return (
    items?.length ? 
        <form action="/api/create-checkout-session" method="post">
        {items.map((item, key) =>
            <div key={key} className="mt-8">
                <h3 className="bg-tertiary p-2 rounded-md flex justify-between items-center flex-wrap">
                    <span className="flex items-center">
                        <CldImage
                            width="50"
                            height="50"
                            src={item.product.picture} alt={""}
                            className="mr-2"
                        />
                        <strong>{item.product.name}</strong>
                    </span>
                    <Icon icon={XIcon} className="cursor-pointer" onClick={() => removeFromCart(item.id)}></Icon>
                </h3>
                <div className="flex justify-between p-2">
                    <strong>Qty: {item.quantity}</strong>
                    <strong>Preço: {item.product.price}</strong>
                </div>
                {item.metadata && 
                    <>
                        <div className="flex justify-between p-2">
                            <strong>Adultos: {item.metadata.number_adults?.toString()}</strong>
                            <strong>Crianças: {item.metadata.number_children?.toString()}</strong>
                        </div>
                        <div className="p-2">
                            <small>Checkin: {item.metadata.start?.toString()}</small><br />
                            <small>Checkout: {item.metadata.end?.toString()}</small>
                        </div>
                    </>
                }
                <div className="flex justify-between bg-slate-200 p-2 rounded-md">
                    <strong>Total</strong>
                    <strong>{item.product.price * item.quantity}</strong>
                </div>
                <input type="hidden" name="product_id" value={item.product.id} />
                <input type="hidden" name="start" value={item.metadata?.start || ""} />
                <input type="hidden" name="end" value={item.metadata?.end || ""} />
                <input type="hidden" name="number_children" value={item.metadata?.number_children || ""} />
                <input type="hidden" name="number_adults" value={item.metadata?.number_adults || ""} />
            </div>
        )}
        <div className="text-center py-4">
            <Button className="cta">Reservar</Button>
        </div>
        </form>
    :
        <p className="font-bold px-8 py-16">Não fez nemhuma reserva ainda</p>
    )
}

export default memo(Cart)