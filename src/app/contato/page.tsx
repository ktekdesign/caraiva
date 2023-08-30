import Banner from '@/components/banner'
import Localization from '@/components/localization'
import PageTitle from '@/components/page-title'
import { getImageUrl } from '@/utils/helpers'
import { Col, Grid } from '@tremor/react'

export default function Contato() {
  return (
    <>
      <Banner className="inner-banner" url={getImageUrl("v1693300242/RWB03586_kkbvu5.jpg")} />
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
