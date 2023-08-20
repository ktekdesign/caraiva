"use client"
import Banner from '@/components/banner'
import BookingFlow from '@/components/booking-flow'
import PageTitle from '@/components/page-title'
import PhotoGrid from '@/components/photo-grid'
import Rating from '@/components/rating'
import SectionTitle from '@/components/section-title'
import SellMedia from '@/components/sell-media'
import { photos } from '@/utils/photos'
import { Col, Grid, Text } from '@tremor/react'
import {Slide} from 'react-awesome-reveal'

const ratings = [
  {
    picture: "https://lh3.googleusercontent.com/a-/AD_cMMQQMvNKU5YcTTtLvSutpIyvmIXBpXA3-5ugiSFaexdwHVV9=w120-h120-p-rp-mo-br100",
    name: "Renato Ribeiro",
    content: "Para quem busca conforto, tranquilidade e um lugar pra descansar, o Recanto da paz é perfeito. Vc dorme e acordo escutando apenas o barulho do mar e dos pássaros, foi o que mais me encantou! O chalé possui uma cozinha toda equipada, então podemos levar o que quiser, além disso tem padaria, mercadinho e farmácia bem próximo caso precise. Ficamos apenas uma diária e saímos encantados. O acesso é bem fácil tanto para o centro histórico quanto para a praia. Recomendo e voltarei com toda certeza!",
    stars: 5,
    source: "https://www.google.com/maps/contrib/107504493944096160860/reviews/@-16.6317186,-39.1076247,11z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr&entry=ttu"
  },
  {
    picture: "https://lh3.googleusercontent.com/a/AAcHTtdhsX8mwIte1-OelBeSXzYTz8in2fBfB6ZlC932gHB1=w120-h120-p-rp-mo-br100",
    name: "Eduardo Zambon Destefani",
    content: "Experiência incrível! O local é muito sossegado, perto da praia e é um charme! Muito aconchegante, cama ótima e lençóis e toalhas impecáveis. Fomos recebidos pelo anfitrião (Marcelo) que foi muito solícito, nos explicou tudo sobre a vila. Voltarei em breve.",
    stars: 5,
    source: "https://www.google.com/maps/contrib/111754797873176243210/reviews/@-18.5651424,-39.718539,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr&entry=ttu"
  },
  {
    picture: "https://lh3.googleusercontent.com/a-/AD_cMMTBLEA4h4Te0X6G3ZmVm6acuDo7fOXA5Z6skIsIMRmHcQ=w120-h120-p-rp-mo-br100",
    name: "Michelle Papalardo",
    content: "Lugar aconchegante e perto da praia.. super organizado, bem equipado e limpo. O serviço da Sra. Márcia (uma fofa) é super rápido… todas as dúvidas que tivemos, ela respondia em segundos… com certeza voltarei.",
    stars: 5,
    source: "https://www.google.com/maps/contrib/112776214953772282028/reviews/@-16.8133393,-39.1477448,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=fr&entry=ttu"
  }
]

export default function Accomodacoes() {
  return (
    <>
      <Banner className="inner-banner" url='/images/banner.webp' />
      <main>
        <Grid numItems={1} className="page-banner">
          <Col>
            <PageTitle title="Acomodações" />
          </Col>
        </Grid>
        <section>
          <SectionTitle>
            <h2 className="heading2 w-full">Pousada <span className='text-primary color-effect'>Recanto da Paz</span></h2>
            <Text>Viva o Paraíso de Caraiva: Encante-se com a Experiência Única de Hospedagem em Chalés Exclusivos!</Text>
          </SectionTitle>
          <div className='inner-centered'>
            <PhotoGrid photos={photos} />
          </div>
        </section>
        <section className='dual-background'>
          <div className='grid gap-16 grid-cols-1 md:grid-cols-2 inner-centered'>
            <div>
              <Slide direction='left'>
                <h2 className='heading2 pb-2'>Descubra o Paraíso em Caraíva: Bem-Vindo à Nossa Pousada</h2>

                <p>Bem-vindo a um refúgio escondido nas margens de Caraíva, um lugar onde o encanto rústico se encontra com a serenidade da natureza. Apresentamos a você a nossa pousada, onde cada momento é uma aventura e cada suspiro é preenchido com a tranquilidade da vida à beira-mar.</p>

                <h3 className='heading3 py-2'>Aconchego e Estilo:</h3>
                <p>Nossas acomodações foram projetadas para oferecer o equilíbrio perfeito entre conforto e autenticidade. Cada quarto é um santuário acolhedor, decorado com toques locais que capturam a essência da cultura de Caraíva. A sensação de estar em casa, mesmo longe de casa, é o nosso objetivo principal.</p>

                <h3 className='heading3 py-2'>Experiências Memoráveis:</h3>
                <p>Sua estadia na nossa pousada é mais do que apenas acomodação. Oferecemos uma gama de atividades para tornar sua visita verdadeiramente inesquecível. De caminhadas pela praia a mergulhos refrescantes nas piscinas naturais, cada momento é uma oportunidade de se conectar com a natureza e com você mesmo.</p>

                <h3 className='heading3 py-2'>Descubra Caraíva Conosco:</h3>
                <p>Se você procura um refúgio onde a simplicidade e a beleza se unem, nossa pousada é o destino perfeito. Seja para uma escapada romântica, um retiro tranquilo ou uma aventura em família, estamos aqui para criar memórias duradouras em meio à beleza intocada de Caraíva.</p>

                <h3 className='heading3 py-2'>Reserve Agora:</h3>
                <p>Não espere para vivenciar a magia de Caraíva em nossa pousada. Reserve agora e permita-nos recebê-lo de braços abertos para uma experiência que o levará a um mundo de beleza natural e hospitalidade calorosa.</p>

                <p>Venha desfrutar da autenticidade e da paz de espírito em nossa pousada à beira-mar. Estamos ansiosos para receber você!</p>

                <p><span className='font-bold'>Pousada Recanto da Paz</span> - O Paraíso em Caraíva aguarda a sua chegada.</p>
              </Slide>
            </div>
            <div>
              <Slide direction='right'>
                <BookingFlow />
              </Slide>
            </div>
          </div>
        </section>
        <section>
          <SectionTitle>
            <h2 className='heading2'>Avaliações</h2>
            <SellMedia social={false} />
          </SectionTitle>
          <div className='inner-centered'>
            {ratings?.map((rating, key) => (
              <Rating key={key} rating={rating} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
