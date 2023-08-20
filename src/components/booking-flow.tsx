"use client"
import { useState } from "react"
import OnboardingFlow from "./onboarding-flow"
import Cart from "./cart"
import BookingForm from "./booking-form"
import { Card, ProgressBar } from "@tremor/react"
import Loading from "./loading"

const BookingFlow = () => {
    const [active, setActive] = useState(0)
    const [count, setCount] = useState(0)
    return (
        <Card className="ring-white bg-white p-4 pb-8">
            {active > 1 && <ProgressBar value={(active + 1) * 100 / count} className="py-1 mb-2" />}
            <OnboardingFlow active={active} count={count} setCount={setCount} >
                <BookingForm onSubmit={(e) => {
                    e.preventDefault()
                    setActive(1)
                    setTimeout(() => setActive(2), 5000)
                }} />
                <Loading />
                <Cart />
            </OnboardingFlow>
    </Card>
    )
}

export default BookingFlow