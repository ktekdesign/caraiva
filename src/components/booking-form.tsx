"use client"
import { Text, Grid, Col, NumberInput, Button, Card, DateRangePicker, DateRangePickerValue } from "@tremor/react"
import { UserGroupIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/solid"
import SellMedia from "./sell-media"
import useCart from "@/hooks/useCart"
import { FormEvent, useState } from "react"
import { pt } from "date-fns/locale";

const BookingForm = () => {
    const [selectedDayRange, setSelectedDayRange] = useState<DateRangePickerValue>({
        from: undefined,
        to: undefined,
    })
    const [error, setError] = useState("")
    const {addToCart} = useCart()
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        
        const id = crypto.randomUUID()
        const {from: checkin, to: checkout} = selectedDayRange
        if (!checkin || !checkout) {
            setError("Escolha as datas de checkin e checkout antes de continuar")
            return
        } else {
            setError("");
        }

        const quantity = Number(formData.get("quantity"))
        const number_adults = Number(formData.get("number_adults"))
        const number_children = Number(formData.get("number_children"))
        if(!quantity) return setError("Informe a quantidade de quartos")
        if(!number_adults) return setError("Informe o número de hóspedes")

        try {
            const response = await fetch('/api/check-availability/', {
                method: 'POST',
                body: JSON.stringify({checkin, checkout, quantity})
            })

            const availability = await response.json()
    
            if(availability) {
        
                addToCart({
                    id,
                    title: availability.prices?.name || availability.prices?.products?.name,
                    //picture_url: product.picture,
                    unit_price: availability.prices?.unit_amount,
                    quantity,
                    number_adults,
                    number_children,
                    checkin,
                    checkout
                })
            } else {
                setError('Não há vagas disponíveis.')
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Card className="ring-0">
            <h2 className="heading2">Reserve Já!</h2>
            <form onSubmit={onSubmit} method="post" action="/api/create-checkout-session" className="booking-form">
                <Text>Preencha o formulario para ver a disponibilidade</Text>
                <Grid numItems={1} numItemsLg={2} className="gap-4 pt-4">
                    <Col>
                        <DateRangePicker value={selectedDayRange}
                            className="max-w-full py-0 range-date"
                            onValueChange={setSelectedDayRange}
                            locale={pt}
                            placeholder="Informe as datas de checkin e checkout"
                            enableYearNavigation={true}
                            minDate={new Date()}
                            enableSelect={false} />
                        {error && <p>{error}</p>}
                    </Col>
                    <Col>
                        <NumberInput name="quantity" required min={1} icon={HomeIcon} placeholder="Quantos Quartos?" />
                    </Col>
                    <Col>
                        <NumberInput name="number_adults" required min={1} icon={UserGroupIcon} placeholder="Quantos Adultos?" />
                    </Col>
                    <Col>
                        <NumberInput name="number_children" min={0} icon={UsersIcon} placeholder="Quantas Crianças?" />
                    </Col>
                    <Col numColSpanLg={2} className="text-center">
                        <Button className="cta">Ver disponibilidade</Button>
                    </Col>
                </Grid>
            </form>
            <SellMedia />
        </Card>
    )
}

export default BookingForm