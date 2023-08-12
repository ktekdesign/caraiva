"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Parallax, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { Button } from '@tremor/react'
import { memo } from 'react'

const ParallaxSwiper = ({slides}) => (
    <div className='layout-full'>
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
                        <Button className="cta relative">Comprar</Button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )

export default memo(ParallaxSwiper)