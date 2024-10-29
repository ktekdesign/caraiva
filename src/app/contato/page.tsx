'use client'
import {Banner, Localization, PageTitle} from 'components'
import { Col, Grid } from '@tremor/react'

export default function Contato() {
  return (
    <>
      <Banner className="inner-banner" src="RWB03586_kkbvu5.jpg" />
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
