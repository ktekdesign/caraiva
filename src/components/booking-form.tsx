"use client"
import { Text, Grid, Col, NumberInput, Button, Card } from "@tremor/react"
import { UserGroupIcon } from "@heroicons/react/solid"
import SellMedia from "./sell-media"
import useCart from "@/hooks/useCart"
import { getProductById, getQuantity } from "@/utils/helpers"

const BookingForm = () => {
    const {addToCart} = useCart()
    const onFocus = (e) => {
        e.target.type = "date"
    }
    const onBlur = (e) => {
        e.target.type = "text"
    }
    const onSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target)
        
        const id = crypto.randomUUID()
        const product = getProductById(data.get("product_id")?.toString())
        const start = data.get("start")?.toString()
        const end = data.get("end")?.toString()
        
        if(product && start && end) {
            const quantity = getQuantity(start, end)
            addToCart({
                id,
                product,
                quantity,
                metadata: {
                    number_adults: data.get("number_adults")?.toString(),
                    number_children: data.get("number_children")?.toString(),
                    start: data.get("start")?.toString(),
                    end: data.get("end")?.toString()
                }
            })
        }
    }
    return (
        <Card className="ring-0">
            <form onSubmit={onSubmit} method="post" action="/api/create-checkout-session" className="booking-form">
                <h2 className="heading2">Reserve Já!</h2>
                <Text>Preencha o formulario para ver a disponibilidade</Text>
                <Grid numItems={1} numItemsLg={2} className="gap-4 pt-4">
                    <Col className="relative">
                        <input className="input" placeholder="Checkin" onFocus={onFocus} onBlur={onBlur} type="text" name="start" />
                    </Col>
                    <Col className="relative">
                        <input className="input" placeholder="Checkout" onFocus={onFocus} onBlur={onBlur} type="text" name="end" />
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