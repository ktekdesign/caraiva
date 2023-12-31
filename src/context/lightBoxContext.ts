"use client";
import { createContext, Dispatch, SetStateAction } from "react";
type LightBoxContextData = {
  toggler: boolean;
  setToggler: Dispatch<SetStateAction<boolean>>;
  setLightBoxItems: Dispatch<SetStateAction<string[]>>;
};
const LightBoxContext = createContext({} as LightBoxContextData);

export default LightBoxContext;
