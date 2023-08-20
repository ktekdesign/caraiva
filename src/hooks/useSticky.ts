import StickyContext from "@/context/stickyContext";
import { useContext } from "react";

export default function useSticky() {
  return useContext(StickyContext);
}
