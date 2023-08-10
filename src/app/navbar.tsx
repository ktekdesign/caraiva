"use client"
import BookingForm from "@/components/booking-form"
import Cart from "@/components/cart"
import Menu from "@/components/menu"
import Modal from "@/components/modal"
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/solid"
import { Button } from "@tremor/react"
import Link from "next/link"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
    const [float, setFloat] = useState(false)
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
    <>
        <nav className={`navbar ${sticky ? "bg-dark px-8" : "max-w-screen-xl px-8 xl:px-0"}`}>
            <Menu />
            <div className="flex gap-4 items-center">
                <ShoppingCartIcon onClick={() => {
                    setFloat(true)
                    toggleOpen()
                }} className="h-8 fill-white rounded-full border border-white p-1 cursor-pointer" />
                <Link href="/minha-conta">
                    <UserIcon className="h-8 fill-white rounded-full border border-white p-1" />
                </Link>
                <Button className="cta animate-bounce hover:animate-none" onClick={() => {
                    setFloat(false)
                    toggleOpen()
                }}>Reserve Já!</Button>
            </div>
        </nav>
        <Modal float={float} open={open} toggleOpen={toggleOpen}>
            {float ?
                <Cart />
                :
                <BookingForm />
            }
        </Modal>
    </>
)
    }

export default NavBar