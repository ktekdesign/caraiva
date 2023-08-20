"use client"
import useSticky from "@/hooks/useSticky"
import { useEffect } from "react"

const StickyPage = ({children}) => {
    const {setSticky} = useSticky()
    useEffect(() => setSticky(true))
    return (
        <section>
            {children}
        </section>
    )
}

export default StickyPage