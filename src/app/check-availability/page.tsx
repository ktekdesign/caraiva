"use client"
import {Banner, Modal, PageTitle, StickyPage} from 'components'
import {useCart} from 'hooks'
import { getWithExpiry } from 'utils/helpers'
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
type Product =  {prices: any[], name: string, metadata: {pictures: string[]}}
export default function Availability() {
  const {addToCart} = useCart()
  const [items, setItems] = useState({} as DataProps)
  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState({} as Product)
  const choose = async (id: string) => {
    try {
      const {availabilities} = items

      const availability = availabilities?.find(item => item.id = id)
      setProduct(availability)
      setOpen(true)
    } catch (err) {
      console.log(err)
    }
    
  }
  const book = async (id: string) => {
    try {
      const {
        quantity,
        number_adults,
        number_children,
        checkin,
        checkout
      } = items

      const availability = product.prices?.find(item => item.id = id)

      if(availability) {
        addToCart({
          id: crypto.randomUUID(),
          title: availability.name || product.name,
          picture_url: product.metadata.pictures[0],
          unit_price: availability.unit_amount,
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
      const {
        quantity,
        checkin,
        checkout
      } = data
      const captchaToken = (document.getElementsByName('cf-turnstile-response')[0] as HTMLInputElement)?.value

      const response = await fetch('/api/check-availability/', {
        method: 'POST',
        body: JSON.stringify({checkin, checkout, quantity, captchaToken})
      })

      const availabilities = (await response.json())
      setItems({availabilities, ...data})
    })()
  }, [])
  return (
    <>
      <StickyPage />
      <Banner className="inner-banner" src="RWB03586_kkbvu5.jpg" />
      <main>
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
                  {item.metadata?.pictures && <CldImage width={250} height={150} src={item.metadata.pictures[0]} alt={item.name} />}
                </Col>
                <Col numColSpan={2}>
                <Title className='text-dark'>{item.name}</Title>
                <Subtitle>Diaria: A partir de <b>R$ {Math.min(item.prices.map(price => price.unit_amount))}</b></Subtitle>
                <Button onClick={() => choose(item.id)}>Escolher</Button>
                </Col>
              </Grid>
            </Card>
          ))}
        </section>
      </main>
      <Modal open={open} setOpen={setOpen}>
      {product.prices?.map(price => (
          <Card key={price.id}>
            <Grid numItems={3}>
              <Col className='flex justify-center items-center pr-6'>
              {price.metadata?.pictures && <CldImage width={250} height={150} src={price.metadata.pictures[0]} alt={product.name} />}
              </Col>
              <Col numColSpan={2}>
              <Title color='neutral'>{product.name}</Title>
              <Subtitle>Diaria: A partir de <b>R$ {price.unit_amount}</b></Subtitle>
              <Button onClick={() => book(price.id)}>Reservar</Button>
              </Col>
            </Grid>
          </Card>
        ))}
      </Modal>
    </>
  )
}
