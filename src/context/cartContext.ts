import { User } from "@supabase/supabase-js";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { createContext, Dispatch, SetStateAction } from "react";

type CartContextData = {
  setCart: Dispatch<SetStateAction<boolean>>;
  setCheckout: Dispatch<SetStateAction<boolean>>;
  items: Items[];
  setItems: Dispatch<SetStateAction<Items[]>>;
  addToCart: (lineItem: Items) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  user?: User;
};
const CartContext = createContext({} as CartContextData);

export default CartContext;
