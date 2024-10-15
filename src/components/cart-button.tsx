"use client"
import {ShoppingCartIcon} from "@heroicons/react/24/solid";
import useCart from "@/hooks/useCart";
import useSupabaseSession from "@/hooks/useSupabaseSession";
import { useEffect } from "react";

const CartButton = () => {
    const {user, isLogged} = useSupabaseSession()
    const {setCart, items, setPayer} = useCart()
    useEffect(() => {
        if (isLogged) {
            setPayer({
                email: user?.email,
                last_name: user?.user_metadata?.last_name,
                first_name: user?.user_metadata?.first_name,
                phone: {
                  number: user?.phone
                }
            })
        }
    }, [isLogged])
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