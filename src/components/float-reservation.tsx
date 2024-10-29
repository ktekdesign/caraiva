"use client"
import {ReservationButton, SellMedia} from "components"

const FloatReservation = () => (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col">
        <ReservationButton />
        <SellMedia />
    </div>
)

export default FloatReservation