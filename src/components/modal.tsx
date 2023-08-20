import { XIcon } from "@heroicons/react/solid"
import { Icon } from "@tremor/react"
import { Dispatch, ReactNode, SetStateAction, memo } from "react"
import {Slide} from 'react-awesome-reveal'

const Modal = ({children, open, setOpen, float} : {children: ReactNode, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, float?: boolean }) => {
    const close = () => setOpen(false)
    return (
    <div className={`modal ${open ? "flex" : "hidden"}`}>
        <div className="modal-blur" onClick={close}></div>
        <Slide direction="right"  className={float ? "float-modal" : "booking-form"}>
        <dialog className={`${float ? "float-modal" : "booking-form"}`} open={open}>
            <Icon icon={XIcon} onClick={close} className="close-btn"></Icon>
            {children}
        </dialog>
        </Slide>
    </div>
)
    }
export default memo(Modal)