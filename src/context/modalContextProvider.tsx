"use client"
import React, {
  FC,
  ReactNode,
  useState,
} from "react"
import ModalContext from "./modalContext"
import Cart from "@/components/cart"
import BookingForm from "@/components/booking-form"
import Modal from "@/components/modal"

type Props = {
  children: ReactNode
}

const ModalContextProvider: FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
    const [float, setFloat] = useState(false)
    
  const value = { toggleOpen, setFloat }
  
  return (
    <ModalContext.Provider value={value}>
      <Modal float={float} open={open} toggleOpen={toggleOpen}>
            {float ?
                <Cart />
                :
                <BookingForm />
            }
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
