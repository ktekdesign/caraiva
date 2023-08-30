"use client"
import {ShoppingCartIcon} from "@heroicons/react/solid";
import useCart from "@/hooks/useCart";

const CartButton = () => {
    const {setCart} = useCart()
    return (
        <ShoppingCartIcon onClick={() => {
            setCart(true)
        }} className="navbar-icon" />
    )
}

export default CartButton