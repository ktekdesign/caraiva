import { memo } from "react"

const Cart = ({items} : {items?: string[]}) => (
    items?.length ? 
        <></>
    :
        <p className="font-bold px-8 py-16">Não fez nemhuma reserva ainda</p>
)

export default memo(Cart)