import {Banner, PageTitle, ProductsGrid} from 'components'
import { photos } from 'utils/photos'
import { Col, Grid } from '@tremor/react'

export default function Passeios() {
  return (
    <>
      <Banner className="inner-banner" src="DJI_0318_rqymay.jpg" />
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
