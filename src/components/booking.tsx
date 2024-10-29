"use client"
import { Card } from "@tremor/react"
import {SellMedia, BookingForm} from "components"

const Booking = () => (
    <Card className="ring-0">
        <h2 className="heading2 text-center">Reserve Já!</h2>
        <BookingForm />
        <SellMedia />
    </Card>
)

export default Booking