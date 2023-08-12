"use client"
import Menu from "@/components/menu"
import ReservationButton from "@/components/reservation-button"
import ModalContext from "@/context/modalContext"
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/solid"
import { useContext, useEffect, useState } from "react"

const NavBar = () => {
    const {toggleOpen, setFloat} = useContext(ModalContext)
    const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    })
  })
    return (
        <nav className={`z-30 sticky top-0 layout-space-x ${sticky ? "bg-dark" : ""}`}>
            <div className="navbar">
                <Menu />
                <div className="flex gap-4 items-center">
                    <ShoppingCartIcon onClick={() => {
                        setFloat(true)
                        toggleOpen()
                    }} className="navbar-icon" />
                    <UserIcon className="navbar-icon" />
                    <ReservationButton />
                </div>
            </div>
        </nav>
)
    }

export default NavBar