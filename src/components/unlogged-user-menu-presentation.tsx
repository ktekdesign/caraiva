"use client"
import { useState } from "react";
import Modal from "./modal";
import LoginForm from "./login";
import { UserIcon } from "@heroicons/react/24/solid";
import { Card } from "@tremor/react";

const UnLoggedUserMenu = ({open, setOpen, toggleOpen}) => (
        <>
            <UserIcon className="navbar-icon" onClick={toggleOpen} />
            <Modal {...{open, setOpen}}>
                <Card className="ring-white">
                    <LoginForm setActive={null} setToggle={null} />
                </Card>
            </Modal>
        </>
    )

export default UnLoggedUserMenu