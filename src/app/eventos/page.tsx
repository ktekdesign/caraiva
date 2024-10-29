import {Banner, PageTitle, ProductsGrid} from 'components'
import { photos } from 'utils/photos'
import { Col, Grid } from '@tremor/react'

export default function Eventos() {
  return (
    <>
      <Banner className="inner-banner" src="RWB03666_x6ndmr.jpg" />
      <main>
        <Grid numItems={1} className="page-banner">
          <Col>
            <PageTitle title="Eventos" />
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
