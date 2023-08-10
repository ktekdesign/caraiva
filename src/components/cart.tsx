import { memo } from "react"

const Cart = ({items} : {items?: string[]}) => (
    items?.length ? 
        <></>
    :
        <p className="font-bold px-8 py-16">Não há nemhum produto no seu carrinho</p>
)

export default memo(Cart)