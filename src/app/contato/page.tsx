import Banner from '@/components/banner'
import { Col, Grid, Title } from '@tremor/react'

export default function Contato() {
  return (
    <>
      <Banner className="inner-banner" url='/images/banner.webp' />
      <main>
        <Grid numItems={1} className="page-banner place-items-center">
          <Col>
            <Title className='heading1 text-white drop-shadow-lg max-w-md text-center'>Contato</Title>
          </Col>
        </Grid>
      </main>
    </>
  )
}
