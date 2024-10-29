import { Card, Flex, Text } from "@tremor/react";
import {CardSwiper, Price, BuyButton} from "components";
import { memo } from "react";

const ProductGrid = ({products}) => (
  <Flex className='gap-12 flex-col'>
    {products.map(product => (
      <Card key={product} className="gap-8 md:gap-0 p-0 ring-primary hover:shadow flex flex-wrap md:flex-nowrap even:md:flex-row-reverse cursor-pointer">
        <div className="w-full md:w-1/2">
          <CardSwiper slidesPerView={1} slides={products} />
        </div>
        <div className="p-8">
          <h2 className="heading2">Viva o melhor da Bahia</h2>
          <Text>Bem-vindo a Caraiva: Onde a Beleza da Bahia Encontra a Magia da Natureza. Descubra as Maravilhas Desse Paraíso Encantador! 🌴🌊 #Caraiva #Bahia #Paraíso #Natureza #ViagemDosSonhos</Text>
          <Price price={150} />
          <div className="flex justify-center items-center gap-4 mt-8 text-sm lg:text-base lg:gap-8">
            <BuyButton />
          </div>
        </div>
      </Card>       
    ))}
  </Flex>
)

export default memo(ProductGrid)