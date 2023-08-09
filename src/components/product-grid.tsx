import { Col, Grid, Text } from "@tremor/react";
import CardSwiper from "./card-swiper";
import Link from "next/link";
import { memo } from "react";

const ProductGrid = ({product}) => (
    <Grid key={product} numItems={1} numItemsLg={2} className="gap-8 mb-24">
                <Col>
                  <CardSwiper slidesPerView={1} slides={product} />
                </Col>
                <Col>
                  <h2 className="heading2">Viva o melhor da Bahia</h2>
                  <Text>Bem-vindo a Caraiva: Onde a Beleza da Bahia Encontra a Magia da Natureza. Descubra as Maravilhas Desse Paraíso Encantador! 🌴🌊 #Caraiva #Bahia #Paraíso #Natureza #ViagemDosSonhos</Text>
                  <div className="flex flex-wrap-reverse justify-center items-center gap-8 mt-8">
                    <Link href="/carrinho" className="cta-reverse">Adicionar ao carrinho</Link>
                    <Link href="/buy" className="inner-cta">Comprar</Link>
                  </div>
                </Col>
            </Grid>
)

export default memo(ProductGrid)