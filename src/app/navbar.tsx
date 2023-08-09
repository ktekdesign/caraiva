"use client"
import BookingForm from "@/components/booking-form"
import Menu from "@/components/menu"
import Modal from "@/components/modal"
import { Button } from "@tremor/react"
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
        <nav className={`navbar ${sticky ? "bg-dark" : "max-w-screen-xl"}`}>
            <Menu />
            <Button className="cta animate-bounce hover:animate-none" onClick={toggleOpen}>Reserve Já</Button>
        </nav>
        <Modal open={open} toggleOpen={toggleOpen}>
            <BookingForm />
        </Modal>
    </>
)
    }

export default NavBar