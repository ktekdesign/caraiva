"use client"
import ReservationButton from "./reservation-button"
import SellMedia from "./sell-media"

const FloatReservation = () => (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col">
        <ReservationButton />
        <SellMedia />
    </div>
)

export default FloatReservation