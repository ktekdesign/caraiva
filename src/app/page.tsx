"use client"
import Banner from '@/components/banner'
import BookingForm from '@/components/booking-form'
import CardSwiper from '@/components/card-swiper'
import ParallaxSwiper from '@/components/parallax-swiper'
import PhotoGrid from '@/components/photo-grid'
import SectionTitle from '@/components/section-title'
import Video from '@/components/video'
import { photos } from '@/utils/photos'
import { Col, Grid, Text } from '@tremor/react'
import Link from 'next/link'
import {Slide} from 'react-awesome-reveal'

export default function Home() {
  return (
    <>
      <Banner url='/images/banner.webp' />
      <main>
        <section className='centered py-8'>
          <Grid numItems={1} numItemsLg={2} className="home-banner">
            <Col>
              <Slide direction="down">
                <h1 className='heading1 text-white drop-shadow-lg'>Descubra o <span className='text-primary color-effect'>Paraíso Escondido</span>: Caraiva na Bahia!</h1>
                <Text className='py-8 text-white paragraph1 drop-shadow-lg text-left'>
                  Explore suas Praias Deslumbrantes e Cultura Encantadora - Uma Viagem Inesquecível! 
                </Text>
              </Slide>
            </Col>
            <Col>
              <Slide direction="up">
                <BookingForm />
              </Slide>
            </Col>
          </Grid>
        </section>
        <section className='dual-background'>
          <Video />
        </section>
        <section className='centered'>
          <SectionTitle>
            <h2 className="heading2 w-full">Pousada <span className='text-primary color-effect'>Recanto da Paz</span></h2>
            <Text>Viva o Paraíso de Caraiva: Encante-se com a Experiência Única de Hospedagem em Chalés Exclusivos!</Text>
          </SectionTitle>
          <PhotoGrid photos={photos} />
        </section>
        <section className='bg-gray-200'>
          <SectionTitle>
            <h2 className="heading2">Eventos</h2>
            <Link href="/eventos" className='cta-reverse'>Ver Mais</Link>
          </SectionTitle>
          <ParallaxSwiper slides={photos} />
        </section>
        <section className='centered'>
          <SectionTitle>
            <h2 className="heading2">Passeios</h2>
            <Link href="/passeios" className='cta-reverse'>Ver Mais</Link>
          </SectionTitle>
          <CardSwiper slides={photos} cta />
        </section>
      </main>
    </>
  )
}
