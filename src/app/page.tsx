"use client"
import Banner from '@/components/banner'
import BookingForm from '@/components/booking-form'
import CardSwiper from '@/components/card-swiper'
import GalleryComponent from '@/components/gallery'
import ParallaxSwiper from '@/components/parallax-swiper'
import Video from '@/components/video'
import { photos } from '@/utils/photos'
import { Col, Grid, Title, Text } from '@tremor/react'
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
                  <Title className='heading1 text-white drop-shadow-lg'>Descubra o Paraíso Escondido: Caraiva na Bahia!</Title>
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
        <GalleryComponent />
        <ParallaxSwiper slides={photos} />
        <CardSwiper slides={photos} />
      </main>
    </>
  )
}
