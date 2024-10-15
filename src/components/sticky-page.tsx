"use client"
import useSticky from "@/hooks/useSticky"
import { useEffect } from "react"

const StickyPage = () => {
    const {setSticky} = useSticky()
    useEffect(() => setSticky(true))
    return <></>
}

export default StickyPage