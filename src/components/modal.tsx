import { XIcon } from "@heroicons/react/solid"
import { Icon } from "@tremor/react"
import { ReactNode, memo } from "react"
import {Slide} from 'react-awesome-reveal'

const Modal = ({children, open, toggleOpen, float = false} : {children: ReactNode, open: boolean, toggleOpen: () => void, float?: boolean }) => (
    <div className={`modal ${open ? "flex" : "hidden"}`}>
        <div className="modal-blur" onClick={toggleOpen}></div>
        <Slide direction="right"  className={`z-10 ${float ? "float-modal" : "booking-form"}`}>
        <dialog className={`${float ? "float-modal" : "booking-form"}`} open={open}>
            <Icon icon={XIcon} onClick={toggleOpen} className="close-btn"></Icon>
            {children}
        </dialog>
        </Slide>
    </div>
)

export default memo(Modal)