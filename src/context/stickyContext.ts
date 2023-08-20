import { createContext, Dispatch, SetStateAction } from "react";
type StickyContextData = {
  setSticky: Dispatch<SetStateAction<boolean>>;
};
const StickyContext = createContext({} as StickyContextData);

export default StickyContext;
