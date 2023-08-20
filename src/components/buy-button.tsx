"use client"
import { Button } from "@tremor/react";
import { useState } from "react";
import {AttentionSeeker} from 'react-awesome-reveal'
import Modal from "./modal";
import Cart from "./cart";

const BuyButton = () => {
    const [open, setOpen] = useState(false)
    const [float, setFloat] = useState(false)
    
    return (
        <>
            <AttentionSeeker effect="heartBeat" className="z-20">
                <Button className="cta relative block mx-auto" onClick={() => {
                    setFloat(true)
                    setOpen(true)
                }}>Comprar</Button>
            </AttentionSeeker>
            <Modal {...{open, setOpen, float}}>
                <Cart />
            </Modal>
        </>
    )
}

export default BuyButton