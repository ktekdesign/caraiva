"use client";
import SupabaseSession from "@/context/supabaseSession";
import { useContext } from "react";

const useSupabaseSession = () => {
  const { isLogged, userId, user } = useContext(SupabaseSession);

  return { isLogged, userId, user };
};

export default useSupabaseSession;
