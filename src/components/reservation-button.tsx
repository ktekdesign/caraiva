import ModalContext from "@/context/modalContext";
import { Button } from "@tremor/react";
import { useContext } from "react";
import {Roll} from 'react-awesome-reveal'

const ReservationButton = () => {
    const {toggleOpen, setFloat} = useContext(ModalContext)
    
    return (
        <Roll className="z-20">
            <Button className="cta" onClick={() => {
                setFloat(false)
                toggleOpen()
            }}>Reserve Já!</Button>
        </Roll>
    )
}

export default ReservationButton