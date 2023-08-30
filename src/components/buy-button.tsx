"use client"
import { Button } from "@tremor/react";
import {AttentionSeeker} from 'react-awesome-reveal'
import useCart from "@/hooks/useCart";

const BuyButton = (props) => {
    const {setCart} = useCart()
    
    return (
        <>
            <AttentionSeeker effect="heartBeat" className="z-20" {...props}>
                <Button className="cta relative block mx-auto" onClick={() => {
                    setCart(true)
                }}>Comprar</Button>
            </AttentionSeeker>
        </>
    )
}

export default BuyButton