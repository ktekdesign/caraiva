import { createContext, Dispatch, SetStateAction } from "react";
export type LineItem = {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    picture: string;
  };
  quantity: number;
  metadata?: {
    number_adults: string | null;
    number_children?: string | null;
    checkin: Date;
    checkout: Date;
  };
};
type CartContextData = {
  setCart: Dispatch<SetStateAction<boolean>>;
  items: LineItem[];
  setItems: Dispatch<SetStateAction<LineItem[]>>;
  addToCart: (lineItem: LineItem) => void;
  removeFromCart: (id: string) => void;
};
const CartContext = createContext({} as CartContextData);

export default CartContext;
