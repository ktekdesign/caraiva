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
        <nav className={`navbar ${sticky ? "bg-dark" : "centered 2xl:centered-2xl"}`}>
            <Menu />
            <div className="flex gap-4 items-center">
                <ShoppingCartIcon onClick={() => {
                    setFloat(true)
                    toggleOpen()
                }} className="navbar-icon" />
                <UserIcon className="navbar-icon" />
                <ReservationButton />
            </div>
        </nav>
)
    }

export default NavBar