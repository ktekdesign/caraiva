import Banner from '@/components/banner'
import PageTitle from '@/components/page-title'
import ProductGrid from '@/components/product-grid'
import { photos } from '@/utils/photos'
import { Col, Grid } from '@tremor/react'

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
