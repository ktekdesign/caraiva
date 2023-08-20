"use client"
import { Button } from "@tremor/react";
import { useState } from "react";
import {AttentionSeeker} from 'react-awesome-reveal'
import Modal from "./modal";
import BookingFlow from "./booking-flow";

const ReservationButton = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <>
            <AttentionSeeker effect="rubberBand" className="z-20">
                <Button className="cta" onClick={() => {
                    setOpen(true)
                }}>Reserve Já!</Button>
            </AttentionSeeker>
            <Modal {...{open, setOpen}}>
                <BookingFlow />
            </Modal>
        </>
    )
}

export default ReservationButton