"use client"
import { MenuIcon, XIcon } from "@heroicons/react/solid"
import { Icon } from "@tremor/react"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
    const [toggle, setToggle] = useState(false)
    
    return (
        <div>
            <div onClick={() => setToggle(!toggle)}>
                {toggle ?
                    <Icon size="lg" icon={XIcon} className="mobile-menu" />
                :
                    <Icon size="lg" icon={MenuIcon} className="mobile-menu" />
                }
            </div>
            <ul className={` ${toggle ? "flex flex-col absolute w-full bg-white left-0 right-0 mt-4 py-4" : "hidden lg:flex"} menu`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/accomodacoes">Accomodações</Link></li>
                <li><Link href="/passeios">Passeios</Link></li>
                <li><Link href="/eventos">Eventos</Link></li>
                <li><Link href="/contato">Contato</Link></li>
            </ul>
        </div>
    )
}

export default Menu