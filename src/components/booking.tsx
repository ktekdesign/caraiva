"use client"
import { Card } from "@tremor/react"
import SellMedia from "./sell-media"
import BookingForm from "./booking-form"

const Booking = () => (
    <Card className="ring-0">
        <h2 className="heading2 text-center">Reserve Já!</h2>
        <BookingForm />
        <SellMedia />
    </Card>
)

export default Booking