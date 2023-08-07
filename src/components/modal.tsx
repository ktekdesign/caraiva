import { XIcon } from "@heroicons/react/solid"
import { Icon } from "@tremor/react"
import { ReactNode, memo } from "react"

const Modal = ({children, open, toggleOpen} : {children: ReactNode, open: boolean, toggleOpen: () => void }) => (
    <div className={`fixed w-full h-full top-0 left-0 z-10 flex items-center justify-center ${open ? "block" : "hidden"}`}>
        <div className={`fixed w-full h-full top-0 left-0 backdrop-blur cursor-pointer`} onClick={toggleOpen}></div>
        <dialog className="z-10 booking-form" open={open}>
            <Icon icon={XIcon} onClick={toggleOpen} className="cursor-pointer float-right"></Icon>
            {children}
        </dialog>
    </div>
)

export default memo(Modal)