"use client"
import { useState } from "react";
import Modal from "./modal";
import {ShoppingCartIcon} from "@heroicons/react/solid";
import Cart from "./cart";

const CartButton = () => {
    const [open, setOpen] = useState(false)
    const [float, setFloat] = useState(false)
    return (
        <>
            <ShoppingCartIcon onClick={() => {
                        setFloat(true)
                        setOpen(true)
                    }} className="navbar-icon" />
            <Modal {...{open, setOpen, float}}>
                <Cart />
            </Modal>
        </>
    )
}

export default CartButton