"use client"
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react"
import CartContext, { LineItem } from "./cartContext"
import Modal from "@/components/modal"
import Cart from "@/components/cart"

type Props = {
  children: ReactNode
}

const CartContextProvider: FC<Props> = ({ children }) => {
  const [cart, setCart]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const [items, setItems]: [LineItem[], Dispatch<SetStateAction<LineItem[]>>] = useState([])
  const addToCart = (lineItem) => {
    setItems([lineItem, ...items])
    setCart(true)
}
  const removeFromCart = id => {
    const itemsFiltered = items.filter(item => item.id !== id)
    setItems(itemsFiltered)
  }
  const value = { setCart, items, setItems, addToCart, removeFromCart }

  return (
    <CartContext.Provider value={value}>
      {children}
      <Modal {...{open: cart, setOpen: setCart, float: true}}>
          <Cart />
        </Modal>
    </CartContext.Provider>
  )
}

export default CartContextProvider
