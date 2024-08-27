import { Items } from "mercadopago/dist/clients/commonTypes";
import { createContext, Dispatch, SetStateAction } from "react";

type CartContextData = {
  setCart: Dispatch<SetStateAction<boolean>>;
  items: Items[];
  setItems: Dispatch<SetStateAction<Items[]>>;
  addToCart: (lineItem: Items) => void;
  removeFromCart: (id: string) => void;
};
const CartContext = createContext({} as CartContextData);

export default CartContext;
