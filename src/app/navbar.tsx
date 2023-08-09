"use client"
import BookingForm from "@/components/booking-form"
import Menu from "@/components/menu"
import Modal from "@/components/modal"
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/solid"
import { Button } from "@tremor/react"
import Link from "next/link"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
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
                <Link href="carrinho">
                    <ShoppingCartIcon className="h-8 fill-white rounded-full border border-white p-1" />
                </Link>
                <Link href="minha-conta">
                    <UserIcon className="h-8 fill-white rounded-full border border-white p-1" />
                </Link>
                <Button className="cta animate-bounce hover:animate-none" onClick={toggleOpen}>Reserve Já</Button>
            </div>
        </nav>
        <Modal open={open} toggleOpen={toggleOpen}>
            <BookingForm />
        </Modal>
    </>
)
    }

export default NavBar