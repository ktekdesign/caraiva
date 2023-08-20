import LightBoxContext from "@/context/lightBoxContext";
import { useContext } from "react";

export default function useLightBox() {
  return useContext(LightBoxContext);
}
