"use client"
import { Text, Grid, Col, NumberInput, Button, Card, DateRangePicker, DateRangePickerValue } from "@tremor/react"
import { UserGroupIcon } from "@heroicons/react/solid"
import SellMedia from "./sell-media"
import useCart from "@/hooks/useCart"
import { getProductById, getQuantity } from "@/utils/helpers"
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
        const product = getProductById(data.get("product_id")?.toString())
        const {from, to} = selectedDayRange
        if (!from || !to) {
            return setError("Escolha as datas de checkin e checkout antes de continuar");
        } else {
            setError("");
        }
        
        if(product) {
            const quantity = getQuantity(from, to)
            addToCart({
                id,
                product,
                quantity,
                metadata: {
                    number_adults: data.get("number_adults")?.toString() || "",
                    number_children: data.get("number_children")?.toString(),
                    checkin: from,
                    checkout: to
                }
            })
        }
    }
    return (
        <Card className="ring-0">
            <h2 className="heading2">Reserve Já!</h2>
            <form onSubmit={onSubmit} method="post" action="/api/create-checkout-session" className="booking-form">
                <Text>Preencha o formulario para ver a disponibilidade</Text>
                <Grid numItems={1} numItemsLg={2} className="gap-4 pt-4">
                    <Col numColSpanLg={2}>
                        <DateRangePicker value={selectedDayRange}
                            className="max-w-full"
                            onValueChange={setSelectedDayRange}
                            locale={pt}
                            placeholder="Informe as datas de checkin e checkout"
                            enableYearNavigation={true}
                            minDate={new Date()}
                            enableSelect={false} />
                        {error && <p>{error}</p>}
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
            <p className="text-center py-4">OU</p>
            <SellMedia />
            </Card>
    )
}

export default BookingForm