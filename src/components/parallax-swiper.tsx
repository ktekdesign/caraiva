import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Parallax, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { Button, Flex, Title } from '@tremor/react'
import Link from 'next/link'
import { memo } from 'react'

const ParallaxSwiper = ({slides}) => (
    <section>
        <Flex className="gap-8 pb-8 centered items-center justify-between">
            <Title className="heading2">Eventos</Title>
            <Link href="/eventos" className='border border-dark py-2 px-8 font-bold rounded-md text-sm whitespace-nowrap'>Ver Mais</Link>
        </Flex>
        <Swiper
            parallax={true}
            navigation={true}
            autoplay={true}
            modules={[Navigation, Parallax, Autoplay]}
        >
            {slides?.map((slide, key) => (
                <SwiperSlide key={key}>
                    <div className='parallax'>
                        <Image className='object-cover hover:brightness-50' src={slide} fill alt='' />
                        <Button className="bg-white text-dark font-extrabold relative">Comprar ingresso</Button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )

export default memo(ParallaxSwiper)