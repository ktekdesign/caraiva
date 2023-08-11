"use client"
import { Title, Text, DatePicker, Grid, Col, NumberInput, Button, Icon, Card } from "@tremor/react"
import { CalendarIcon, UserGroupIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRef, useState } from "react"
import SellMedia from "./sell-media"

const BookingForm = () => {
    const checkin = useRef(null)
    const checkout = useRef(null)
    const [loading, setLoading] = useState(false)
    return (
        <Card className="ring-white bg-white p-4 pb-8">
            {loading && 
                <div className="flex flex-col gap-4">
                    <Title className="heading2">Aguarde</Title>
                    <p>Estamos procurando as melhores ofertas para você</p>
                    <Image src="/images/loading.svg" width={250} height={250} alt="loading" className="mx-auto" />
                </div>
            }
            <form onSubmit={(e) => {
                e.preventDefault()
                setLoading(true)
                }} className={`booking-form ${loading ? "hidden" : ""}`}>
                <h2 className="heading2">Reserve Já!</h2>
                <Text>Preencha o formulario para ver a disponibilidade</Text>
                <Grid numItems={1} numItemsLg={2} className="gap-4 pt-4">
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
                    <Col numColSpanLg={2} className="text-center">
                        <div className="flex gap-4 flex-col justify-center items-center">
                            <Button className="cta-reverse">Ver disponibilidade</Button>
                            <p>OU</p>
                        </div>
                    </Col>
                </Grid>
            </form>
            <SellMedia />
    </Card>
    )
}

export default BookingForm