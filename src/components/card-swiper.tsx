import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { Button, Card, Flex, Title } from '@tremor/react'
import Link from 'next/link'

export default ({slides}) => (
    <section className='centered'>
        <Flex className="gap-8 pb-8 items-center justify-between">
            <Title className="heading2">Passeios</Title>
            <Link href="/passeios" className='border border-dark py-2 px-8 font-bold rounded-md text-sm whitespace-nowrap'>Ver Mais</Link>
        </Flex>
        <Swiper
            spaceBetween={30}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}     
            navigation={true}
            autoplay={true}
            modules={[Navigation, Autoplay]}
        >
            {slides?.map((slide, key) => (
                <SwiperSlide key={key}>
                    <Card>
                        <div className='h-[200px] w-[300px]'>
                        <Image className='object-cover hover:brightness-50 rounded-md' src={slide} fill alt='' />
                        </div>
                        <Button className="bg-white text-dark font-extrabold relative block mx-auto">Comprar ingresso</Button>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )