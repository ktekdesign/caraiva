import { User } from "@supabase/supabase-js";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { createContext, Dispatch, SetStateAction } from "react";

export type CartItem = Items & {
  number_adults?: number;
  number_children?: number;
  checkin?: Date;
  checkout?: Date;
};
type CartContextData = {
  setCart: Dispatch<SetStateAction<boolean>>;
  setCheckout: Dispatch<SetStateAction<boolean>>;
  items: CartItem[];
  setItems: Dispatch<SetStateAction<CartItem[]>>;
  addToCart: (lineItem: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  user?: User;
  amount: number;
};
const CartContext = createContext({} as CartContextData);

export default CartContext;
