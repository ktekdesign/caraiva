"use client"
import Banner from '@/components/banner'
import PageTitle from '@/components/page-title'
import StickyPage from '@/components/sticky-page'
import useCart from '@/hooks/useCart'
import { getWithExpiry } from '@/utils/helpers'
import { Button, Card, Col, Grid, Subtitle, Title } from '@tremor/react'
import { CldImage } from 'next-cloudinary'
import { useEffect, useState } from 'react'
/* eslint-disable  @typescript-eslint/no-explicit-any */

type DataProps = {
  availabilities: any[]
  quantity: number;
  number_adults: number;
  number_children: number;
  checkin: string;
  checkout: string;
}
export default function Availability() {
  const {addToCart} = useCart()
  const [items, setItems] = useState({} as DataProps)
  const book = async (id: string) => {
    try {
      const {availabilities, quantity,
        number_adults,
        number_children,
        checkin,
        checkout} = items
      const availability = availabilities?.find(item => item.id = id)

      if(availability) {
        addToCart({
            id: crypto.randomUUID(),
            title: availability.prices[0].name || availability.name,
            picture_url: availability.metadata.products[0],
            unit_price: availability.prices[0].unit_amount,
            quantity,
            number_adults,
            number_children,
            checkin: new Date(checkin),
            checkout: new Date(checkout)
        })
      }
  } catch (err) {
      console.log(err)
  }
    
  }
  useEffect(() => {
    (async() => {
      const data = getWithExpiry("availability")
      const {quantity,
      number_adults,
      number_children,
      checkin,
      checkout} = data
    const response = await fetch('/api/check-availability/', {
        method: 'POST',
        body: JSON.stringify({checkin, checkout, quantity})
    })

    const availabilities = (await response.json())

    setItems({availabilities, quantity,
      number_adults,
      number_children,
      checkin,
      checkout})
    })()
  })
  return (
    <>
      <Banner className="inner-banner" src="RWB03586_kkbvu5.jpg" />
      <main>
        <StickyPage />
        <Grid numItems={1} className="page-banner">
          <Col>
            <PageTitle title="Resultados da busca" />
          </Col>
        </Grid>
        <section>
        {items?.availabilities?.map(item => (
          <Card key={item.id}>
            <Grid numItems={3}>
              <Col className='flex justify-center items-center pr-6'>
                {item.metadata.pictures && <CldImage width={250} height={150} src={item.metadata.pictures[0]} alt={item.name} />}
              </Col>
              <Col numColSpan={2}>
              <Title >{item.name}</Title>
              <Subtitle>Diaria: A partir de <b>R$ {Math.min(item.prices.map(price => price.unit_amount))}</b></Subtitle>
              <Button onClick={() => book(item.id)}>Reservar</Button>
              </Col>
            </Grid>
          </Card>
        ))}
        </section>
      </main>
    </>
  )
}
