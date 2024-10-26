"use client"
import { Button } from "@tremor/react";
import {AttentionSeeker} from 'react-awesome-reveal'
import useCart from "@/hooks/useCart";

const CheckoutButton = (props) => {
    const {setCart, setCheckout} = useCart()
    
    return (
        <div className="w-10/12 fixed max-w-[400px] bottom-5 right-0 z-50 flex justify-center">
            <AttentionSeeker effect="heartBeat" className="z-20" {...props}>
                <Button className="mx-auto cta" onClick={() => {
                    setCart(false)
                    setCheckout(true)
                }}>Finalizar</Button>
            </AttentionSeeker>
        </div>
    )
}

export default CheckoutButton