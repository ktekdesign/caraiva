"use client"
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react"
import CartContext, { CartItem } from "./cartContext"
import Modal from "@/components/modal"
import Cart from "@/components/cart"
import { get_unit_amount, getWithExpiry, setWithExpiry } from "@/utils/helpers"
import Checkout from "@/components/checkout"

type Props = {
  children: ReactNode
}

const CartContextProvider: FC<Props> = ({ children }) => {    
  const [cart, setCart]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const [checkout, setCheckout]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const [items, setItems]: [CartItem[], Dispatch<SetStateAction<CartItem[]>>] = useState([])
  const addToCart = (item: CartItem) => {
    const newItems = [item, ...items]
    setWithExpiry('cart', newItems)
    setItems(newItems)
    setCart(true)
  }

  const removeFromCart = (id: string) => {
    const itemsFiltered = items.filter(item => item.id !== id)
    setWithExpiry('cart', itemsFiltered)
    setItems(itemsFiltered)
  }

  const clearCart = () => {
    setWithExpiry('cart', [])
    setItems([])
  }

  useEffect(() => {
    const inCart = getWithExpiry('cart')
    if(inCart) {
      setItems(JSON.parse(inCart))
    }
    
  }, [])

  const amount = useMemo(() => items?.reduce((acc, {unit_price, checkin, checkout, quantity}) => acc + get_unit_amount({unit_price, checkin, checkout}) * quantity, 0), [items])
  

  const value = { setCart, setCheckout, items, setItems, addToCart, removeFromCart, clearCart, amount }

  return (
    <CartContext.Provider value={value}>
      {children}
      <Modal {...{open: cart, setOpen: setCart}} float>
        <Cart />
      </Modal>
      <Modal {...{open: checkout, setOpen: setCheckout}} fit>
        <Checkout />
      </Modal>
    </CartContext.Provider>
  )
}

export default CartContextProvider
