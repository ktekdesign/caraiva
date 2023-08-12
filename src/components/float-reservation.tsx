"use client"
import ReservationButton from "./reservation-button";
import SellMedia from "./sell-media";
import {JackInTheBox} from 'react-awesome-reveal'

const FloatReservation = () => (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center flex-col">
        <ReservationButton />
        <JackInTheBox className="z-20">
            <SellMedia />
        </JackInTheBox>
    </div>
)

export default FloatReservation