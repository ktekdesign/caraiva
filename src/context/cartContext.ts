import { Items } from "mercadopago/dist/clients/commonTypes";
import { createContext, Dispatch, SetStateAction } from "react";

type Payer = {
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: {
    area_code?: string;
    number?: string;
  };
};
type CartContextData = {
  setCart: Dispatch<SetStateAction<boolean>>;
  setCheckout: Dispatch<SetStateAction<boolean>>;
  items: Items[];
  setItems: Dispatch<SetStateAction<Items[]>>;
  addToCart: (lineItem: Items) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  payer: Payer;
  setPayer: Dispatch<SetStateAction<Payer>>;
};
const CartContext = createContext({} as CartContextData);

export default CartContext;
