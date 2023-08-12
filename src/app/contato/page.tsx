import Banner from '@/components/banner'
import Localization from '@/components/localization'
import PageTitle from '@/components/page-title'
import { Col, Grid } from '@tremor/react'

export default function Contato() {
  return (
    <>
      <Banner className="inner-banner" url='/images/banner.webp' />
      <main>
        <Grid numItems={1} className="page-banner">
          <Col>
            <PageTitle title="Contato" />
          </Col>
        </Grid>
        <section>
          <div className='layout-full'>
            <Localization />
          </div>
        </section>
      </main>
    </>
  )
}
