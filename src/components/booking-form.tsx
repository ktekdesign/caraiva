"use client"
import { Text, DatePicker, Grid, Col, NumberInput, Button, Icon } from "@tremor/react"
import { CalendarIcon, UserGroupIcon } from "@heroicons/react/solid"
import SellMedia from "./sell-media"

const BookingForm = ({onSubmit}) => {
    const focusInput = (e) => {
        e.target.parentNode.parentNode.parentNode.querySelector("button").click()
    }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} className="booking-form">
                <h2 className="heading2">Reserve Já!</h2>
                <Text>Preencha o formulario para ver a disponibilidade</Text>
                <Grid numItems={1} numItemsLg={2} className="gap-4 pt-4">
                    <Col className="relative">
                        <DatePicker minDate={new Date()} placeholder="Checkin" />
                        <Icon icon={CalendarIcon} onClick={focusInput} className="absolute right-2 top-1 cursor-pointer" />
                    </Col>
                    <Col className="relative">
                        <DatePicker minDate={new Date()} placeholder="Checkout" />
                        <Icon icon={CalendarIcon} onClick={focusInput} className="absolute right-2 top-1 cursor-pointer" />
                    </Col>
                    <Col>
                        <NumberInput min={1} icon={UserGroupIcon} placeholder="Quantos Adultos?" />
                    </Col>
                    <Col>
                        <NumberInput min={0} icon={UserGroupIcon} placeholder="Quantas Crianças?" />
                    </Col>
                    <Col numColSpanLg={2} className="text-center">
                        <div className="flex gap-4 flex-col justify-center items-center">
                            <Button className="cta-reverse" onClick={onSubmit}>Ver disponibilidade</Button>
                            <p>OU</p>
                        </div>
                    </Col>
                </Grid>
            </form>
            <SellMedia />
            </div>
    )
}

export default BookingForm