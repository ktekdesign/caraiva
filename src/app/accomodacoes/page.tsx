import Banner from '@/components/banner'
import Gallery from '@/components/gallery'
import PageTitle from '@/components/page-title'
import { Col, Grid, Text } from '@tremor/react'

export default function Accomodacoes() {
  return (
    <>
      <Banner className="inner-banner" url='/images/banner.webp' />
      <main>
        <Grid numItems={1} className="page-banner">
          <Col>
            <PageTitle>Accomodações</PageTitle>
          </Col>
        </Grid>
        <section>
          <Grid numItemsLg={3} className="gap-8 pb-8 inner-centered">
              <Col numColSpanLg={2}>
                  <h2 className="heading2 typing-effect w-full">Pousada <span className='text-primary'>Recanto da Paz</span></h2>
              </Col>
              <Col>
                  <Text>Viva o Paraíso de Caraiva: Encante-se com a Experiência Única de Hospedagem em Chalés Exclusivos!</Text>
              </Col>
            </Grid>
          <Gallery />
        </section>
      </main>
    </>
  )
}
