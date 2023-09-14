"use client"
import {ShoppingCartIcon} from "@heroicons/react/solid";
import useCart from "@/hooks/useCart";

const CartButton = () => {
    const {setCart, items} = useCart()
    return (
        <div className="relative">
            <ShoppingCartIcon onClick={() => {
                setCart(true)
            }} className="navbar-icon" />
            <strong className={`absolute bg-primary w-4 h-4 text-xs text-white -top-1 -mr-1 left-auto right-0 rounded-full justify-center items-center ${items.length ? "flex" : "hidden"}`}>{items.length}</strong>
        </div>
    )
}

export default CartButton