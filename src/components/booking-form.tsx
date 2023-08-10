import { Title, Text, DatePicker, Grid, Col, NumberInput, Button, Icon } from "@tremor/react"
import { CalendarIcon, UserGroupIcon } from "@heroicons/react/solid"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

const BookingForm = () => {
    const checkin = useRef(null)
    const checkout = useRef(null)
    return (
    <form onSubmit={(e) => e.preventDefault()} className="booking-form">
        <Title className="heading2">Reserve Já</Title>
        <Text>Preencha o formulario para ver a disponibilidade</Text>
        <Grid numItems={1} numItemsMd={2} className="gap-8 pt-8">
            <Col className="relative">
                <DatePicker ref={checkin} minDate={new Date()} placeholder="Checkin" />
                <Icon icon={CalendarIcon} onClick={() => {
                    checkin.current.firstChild.click()
                }} className="absolute right-2 top-1 cursor-pointer" />
            </Col>
            <Col className="relative">
                <DatePicker minDate={new Date()} ref={checkout} placeholder="Checkout" />
                <Icon icon={CalendarIcon} onClick={() => {
                    checkout.current.firstChild.click()
                }} className="absolute right-2 top-1 cursor-pointer" />
            </Col>
            <Col>
                <NumberInput min={1} icon={UserGroupIcon} placeholder="Quantos Adultos?" />
            </Col>
            <Col>
                <NumberInput min={0} icon={UserGroupIcon} placeholder="Quantas Crianças?" />
            </Col>
            <Col numColSpanMd={2} className="text-center">
                <div className="flex gap-4 flex-col justify-center items-center">
                    <Button className="cta-reverse">Ver disponibilidade</Button>
                    <p>OU</p>
                    <Link href="https://www.airbnb.com.br/rooms/854228588053595526" target="_blank">
                        <Image width={150} height={0} alt="" src="/images/airbnb.svg" />
                    </Link>
                </div>
            </Col>
        </Grid>
    </form>
)
    }

export default BookingForm