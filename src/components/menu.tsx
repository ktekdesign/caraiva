"use client"
import { MenuIcon, XIcon } from "@heroicons/react/solid"
import { Icon } from "@tremor/react"
import Link from "next/link"
import { useCallback, useState } from "react"
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Acomodações', href: '/acomodacoes' },
    { name: 'Passeios', href: '/passeios' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Contato', href: '/contato' }
  ];

const Menu = () => {
    const [toggle, setToggle] = useState(false)
    const toggleMenu = useCallback(() => setToggle(!toggle), [toggle])
    const pathname = usePathname()
    return (
        <div>
            <div className="lg:hidden" onClick={toggleMenu}>
                {toggle ?
                    <Icon size="lg" icon={XIcon} className="mobile-menu" />
                :
                    <Icon size="lg" icon={MenuIcon} className="mobile-menu" />
                }
            </div>
            <ul className={` ${toggle ? "flex flex-col absolute w-full bg-white left-0 right-0 mt-4 py-4" : "hidden lg:flex"} menu`}>
                {navigation.map(({name, href}, key) => (
                    <li onClick={() => setToggle(false)} key={key}><Link href={href} className={pathname === href ? "active-menu-item" : ""}>{name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Menu