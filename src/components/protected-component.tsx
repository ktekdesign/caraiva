import { Children, ReactNode } from "react"
import { cookies } from 'next/headers'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function ProtectedComponent ({children} : {children?: ReactNode}) {
    const supabase = createServerComponentClient({
        cookies,
    })
    
    const {
    data: { session },
    } = await supabase.auth.getSession()


    return (
        <>
            {Children.toArray(children)[Number(!!session)]}
        </>        
    )
}
