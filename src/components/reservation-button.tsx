import ModalContext from "@/context/modalContext";
import { Button } from "@tremor/react";
import { useContext } from "react";

const ReservationButton = () => {
    const {toggleOpen, setFloat} = useContext(ModalContext)
    
    return (
        <Button className="cta z-20 animate-bounce hover:animate-none" onClick={() => {
            setFloat(false)
            toggleOpen()
        }}>Reserve Já!</Button>
    )
}

export default ReservationButton