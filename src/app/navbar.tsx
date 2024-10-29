"use client"
import {CartButton, Menu, ProfileButton, ReservationButton} from "components"
import Script from "next/script"

const NavBar = () => ( 
    <nav className="nav">
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" defer />
        <div className="navbar">
            <Menu />
            <div className="flex gap-4 items-center">
                <CartButton />
                <ProfileButton />
                <ReservationButton />
            </div>
        </div>
    </nav>
)

export default NavBar