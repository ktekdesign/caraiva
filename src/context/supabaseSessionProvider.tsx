"use client"
import React, {
  FC,
  ReactNode,
  useEffect,
  useState
} from "react"
import SupabaseSession, { SupabaseData } from "./supabaseSession"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

type Props = {
  children: ReactNode
}

const SupabaseSessionProvider: FC<Props> = ({ children }) => {
  const [value, setValue] = useState({} as SupabaseData)

  useEffect(() => {
    const getSession = async () => {
      try {
        const supabase = createClientComponentClient()
        const {data: {session}} = await supabase.auth.getSession()
        setValue({
          isLogged: session?.user.role === "authenticated",
          userId: session?.user.id ?? ""
        })
      } catch (err) {
        console.error(err)
      }
    }
    getSession()
  })
   
  return (
    <SupabaseSession.Provider value={value}>
      {children}
    </SupabaseSession.Provider>
  )
}

export default SupabaseSessionProvider
