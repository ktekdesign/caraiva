import { createContext, Dispatch, SetStateAction } from "react";
type ModalContextData = {
  toggleOpen: () => void;
  setFloat: Dispatch<SetStateAction<boolean>>;
};
const ModalContext = createContext({} as ModalContextData);

export default ModalContext;
