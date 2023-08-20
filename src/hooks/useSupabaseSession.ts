"use client";
import SupabaseSession from "@/context/supabaseSession";
import { useContext } from "react";

const useSupabaseSession = () => {
  const { isLogged, userId } = useContext(SupabaseSession);

  return { isLogged, userId };
};

export default useSupabaseSession;
