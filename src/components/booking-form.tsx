"use client"
import { Title, Text, DatePicker, Grid, Col, NumberInput, Button } from "@tremor/react"
import { UserGroupIcon } from "@heroicons/react/solid"

const BookingForm = () => (
    <form onSubmit={(e) => e.preventDefault()} className="booking-form">
        <Title className="heading2">Reserve Já</Title>
        <Text>Preencha o formulario para ver a disponibilidade</Text>
        <Grid numItems={1} numItemsMd={2} className="gap-8 pt-8">
            <Col>
                <DatePicker minDate={new Date()} placeholder="Checkin" />
            </Col>
            <Col>
                <DatePicker minDate={new Date()} placeholder="Checkout" />
            </Col>
            <Col>
                <NumberInput min={1} icon={UserGroupIcon} placeholder="Quantos Adultos?" />
            </Col>
            <Col>
                <NumberInput min={0} icon={UserGroupIcon} placeholder="Quantas Crianças?" />
            </Col>
            <Col numColSpanMd={2} className="text-center">
            <Button size="xl" className="inherit bg-dark text-white">Ver disponibilidade</Button>
            </Col>
        </Grid>
    </form>
)

export default BookingForm