import Banner from '@/components/banner'
import PageTitle from '@/components/page-title'
import ProductsGrid from '@/components/products-grid'
import { photos } from '@/utils/photos'
import { Col, Grid } from '@tremor/react'

export default function Passeios() {
  return (
    <>
      <Banner className="inner-banner" url='/images/banner.webp' />
      <main>
        <Grid numItems={1} className="page-banner">
          <Col>
            <PageTitle title="Passeios" />
          </Col>
        </Grid>
        <section>
          <div className='inner-centered'>
            <ProductsGrid products={photos} />
          </div>
        </section>
      </main>
    </>
  )
}
