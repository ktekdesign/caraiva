"use client"
import Banner from '@/components/banner'
import BookingFlow from '@/components/booking-flow'
import CardSwiper from '@/components/card-swiper'
import FloatReservation from '@/components/float-reservation'
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
        <section className='py-0'>
          <div className='inner-centered'>
            <Grid numItems={1} numItemsLg={2} className="home-banner">
              <Col>
                <Slide direction="left">
                  <h1 className='heading1 text-white drop-shadow-lg'>Descubra o <span className='text-primary color-effect'>Paraíso Escondido</span>: Caraiva na Bahia!</h1>
                  <Text className='py-8 text-white paragraph1 drop-shadow-lg text-left'>
                    Explore suas Praias Deslumbrantes e Cultura Encantadora - Uma Viagem Inesquecível! 
                  </Text>
                </Slide>
              </Col>
              <Col>
                <BookingFlow />
              </Col>
            </Grid>
          </div>
        </section>
        <section className='dual-background'>
          <div className='inner-centered'>
            <Video />
          </div>
        </section>
        <section>
          <SectionTitle>
            <h2 className="heading2 w-full">Pousada <span className='text-primary color-effect'>Recanto da Paz</span></h2>
            <Text>Viva o Paraíso de Caraiva: Encante-se com a Experiência Única de Hospedagem em Chalés Exclusivos!</Text>
          </SectionTitle>
          <div className='relative inner-centered'>
            <FloatReservation />
            <PhotoGrid photos={photos} />
          </div>
        </section>
        <section className='bg-gray-200'>
          <SectionTitle>
            <h2 className="heading2">Eventos</h2>
            <Link href="/eventos" className='cta-reverse'>Ver Mais</Link>
          </SectionTitle>
          <ParallaxSwiper slides={photos} />
        </section>
        <section>
          <SectionTitle>
            <h2 className="heading2">Passeios</h2>
            <Link href="/passeios" className='cta-reverse'>Ver Mais</Link>
          </SectionTitle>
          <div className='inner-centered'>
            <CardSwiper slides={photos} cta />
          </div>
        </section>
      </main>
    </>
  )
}
