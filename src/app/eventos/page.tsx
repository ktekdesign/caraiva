import Banner from '@/components/banner'
import CardSwiper from '@/components/card-swiper'
import PageTitle from '@/components/page-title'
import ProductGrid from '@/components/product-grid'
import { photos } from '@/utils/photos'
import { Col, Grid, Title, Text } from '@tremor/react'
import Link from 'next/link'

export default function Eventos() {
  return (
    <>
      <Banner className="inner-banner" url='/images/banner.webp' />
      <main>
        <Grid numItems={1} className="page-banner">
          <Col>
            <PageTitle>Eventos</PageTitle>
          </Col>
        </Grid>
        <section className='centered flex flex-col gap-16'>
          {photos.map(photo => (
            <ProductGrid key={photo} product={photos} />
          ))}
        </section>
      </main>
    </>
  )
}
