"use client"
import Banner from '@/components/banner'
import BookingForm from '@/components/booking-form'
import CardSwiper from '@/components/card-swiper'
import Gallery from '@/components/gallery'
import ParallaxSwiper from '@/components/parallax-swiper'
import SectionTitle from '@/components/section-title'
import Video from '@/components/video'
import { photos } from '@/utils/photos'
import { Col, Grid, Title, Text } from '@tremor/react'
import Link from 'next/link'
import Slide from 'react-reveal/Slide'

export default function Home() {
  return (
    <>
      <Banner url='/images/banner.webp' />
      <main>
        <section className='centered'>
          <Grid numItems={1} numItemsLg={2} className="home-banner">
            <Col>
              <Slide down>
                <div className='opacity-0'>
                  <Title className='heading1 text-white drop-shadow-lg'>Descubra o <span className='text-primary color-effect'>Paraíso Escondido</span>: Caraiva na Bahia!</Title>
                  <Text className='py-8 text-white paragraph1 drop-shadow-lg'>
                    Explore suas Praias Deslumbrantes e Cultura Encantadora - Uma Viagem Inesquecível! 
                  </Text>
                </div>
              </Slide>
            </Col>
            <Col>
              <Slide up>
                <div className='opacity-0'>
                  <BookingForm />
                </div>
              </Slide>
            </Col>
          </Grid>
        </section>
        <Video />
        <section>
            <Grid numItemsLg={3} className="gap-8 pb-8 inner-centered">
                <Col numColSpanLg={2}>
                    <Title className="heading2 typing-effect w-full">Pousada <span className='text-primary'>Recanto da Paz</span></Title>
                </Col>
                <Col>
                    <Text>Viva o Paraíso de Caraiva: Encante-se com a Experiência Única de Hospedagem em Chalés Exclusivos!</Text>
                </Col>
            </Grid>
            <Gallery />
        </section>
        <section>
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
