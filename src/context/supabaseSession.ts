import { User } from "@supabase/supabase-js";
import { createContext } from "react";
export type SupabaseData = {
  isLogged: boolean;
  userId: string | undefined;
  user: User | undefined;
};
const SupabaseSession = createContext({} as SupabaseData);

export default SupabaseSession;
