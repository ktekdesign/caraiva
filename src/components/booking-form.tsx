"use client"
import { Text, Grid, Col, NumberInput, Button, Card, DateRangePicker, DateRangePickerValue } from "@tremor/react"
import { UserGroupIcon } from "@heroicons/react/24/solid"
import SellMedia from "./sell-media"
import useCart from "@/hooks/useCart"
import { getProductById } from "@/utils/helpers"
import { useState } from "react"
import { pt } from "date-fns/locale";

const BookingForm = () => {
    const [selectedDayRange, setSelectedDayRange] = useState<DateRangePickerValue>({
        from: undefined,
        to: undefined,
      });
      const [error, setError] = useState("")
    const {addToCart} = useCart()
    const onSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target)
        
        const id = crypto.randomUUID()
        const product = getProductById(data.get("product_id"))
        const {from: checkin, to: checkout} = selectedDayRange
        if (!checkin || !checkout) {
            return setError("Escolha as datas de checkin e checkout antes de continuar");
        } else {
            setError("");
        }
        
        if(product) {
            const quantity = data.get("quantity")?.toString()
            const number_adults = data.get("number_adults")?.toString()
            if(!quantity) return setError("Informe a quantidade de quartos")
            if(!number_adults) return setError("Informe o número de adultos")
            
            addToCart({
                id,
                title: product.name,
                picture_url: product.picture,
                unit_price: product.price,
                quantity: Number(quantity),
                description: JSON.stringify({
                    number_adults,
                    number_children: data.get("number_children")?.toString(),
                    checkin,
                    checkout
                })
            })
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
                        <NumberInput name="quantity" required min={1} icon={UserGroupIcon} placeholder="Quantos Quartos?" />
                    </Col>
                    <Col>
                        <NumberInput name="number_adults" required min={1} icon={UserGroupIcon} placeholder="Quantos Adultos?" />
                    </Col>
                    <Col>
                        <NumberInput name="number_children" min={0} icon={UserGroupIcon} placeholder="Quantas Crianças?" />
                    </Col>
                    <Col numColSpanLg={2} className="text-center">
                        <Button className="cta">Ver disponibilidade</Button>
                    </Col>
                </Grid>
                <input type="hidden" name="product_id" value="price_1NhgvALwbWWTaNy5L09JdXdo" />
            </form>
            <SellMedia />
            </Card>
    )
}

export default BookingForm