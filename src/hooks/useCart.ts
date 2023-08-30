import CartContext from "@/context/cartContext";
import { useContext } from "react";

export default function useCart() {
  return useContext(CartContext);
}
