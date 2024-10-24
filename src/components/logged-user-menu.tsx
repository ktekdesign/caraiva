"use client"
import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import LogoutButton from "./logout-button";
import Link from "next/link";
import useCart from "@/hooks/useCart";

const LoggedUserMenu = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
    const {clearCart} = useCart()
    
    return (
        <div onMouseEnter={() => {
            setOpen(true)
        }}>
            <UserIcon className="navbar-icon" onClick={toggleOpen} />
            <div className={open ? "block" : "hidden"}>
                <div className="fixed w-full h-full left-0" onClick={toggleOpen} />
                <ul onMouseLeave={toggleOpen} className="sub-menu">
                    <li>
                        <Link href="/checkin">Checkin</Link>
                    </li>
                    <li>
                        <LogoutButton onSubmit={(e) => {
                            e.preventDefault()
                            clearCart()
                            setOpen(false)
                        }} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LoggedUserMenu