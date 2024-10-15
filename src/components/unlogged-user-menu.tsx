"use client"
import { useState } from "react";
import UnLoggedUserMenuPresentation from "./unlogged-user-menu-presentation";

const UnLoggedUserMenu = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
    
    return <UnLoggedUserMenuPresentation  open={open} setOpen={setOpen} toggleOpen={toggleOpen} />
}

export default UnLoggedUserMenu