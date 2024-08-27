import { XMarkIcon } from "@heroicons/react/24/solid"
import { Icon } from "@tremor/react"
import { Dispatch, ReactNode, SetStateAction, memo } from "react"
import {Slide} from 'react-awesome-reveal'

const Modal = ({children, open, setOpen, float, fit} : {children: ReactNode, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, float?: boolean, fit?: boolean }) => {
    const close = () => setOpen(false)
    return (
    <div className={`modal ${fit ? "fit" : ""} ${open ? "flex" : "hidden"}`}>
        <div className="modal-blur" onClick={close}></div>
        <Slide direction="right"  className={float ? "float-modal" : fit ? "fit-modal" : "booking-form"}>
        <dialog className={`${float ? "float-modal" : fit ? "fit-modal" : "booking-form"}`} open={open}>
            <Icon icon={XMarkIcon} onClick={close} className="close-btn"></Icon>
            {children}
        </dialog>
        </Slide>
    </div>
)
    }
export default memo(Modal)