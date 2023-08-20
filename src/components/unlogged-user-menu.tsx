"use client"
import { useState } from "react";
import Modal from "./modal";
import LoginForm from "./login";
import { UserIcon } from "@heroicons/react/solid";
import { Card } from "@tremor/react";

const UnLoggedUserMenu = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)
    
    return (
        <>
            <UserIcon className="navbar-icon" onClick={toggleOpen} />
            <Modal {...{open, setOpen}}>
                <Card className="ring-white">
                    <LoginForm />
                </Card>
            </Modal>
        </>
    )
}

export default UnLoggedUserMenu