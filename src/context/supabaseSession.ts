import { createContext } from "react";
export type SupabaseData = {
  isLogged: boolean;
  userId: string | undefined;
};
const SupabaseSession = createContext({} as SupabaseData);

export default SupabaseSession;
