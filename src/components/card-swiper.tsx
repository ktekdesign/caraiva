"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { Button, Card } from '@tremor/react'
import { memo } from 'react'

const CardSwiper = ({slides, slidesPerView = 3, cta = false}) => (
        <Swiper
            spaceBetween={30}
            breakpoints={{
                0: {
                  slidesPerView: Math.max(slidesPerView - 2, 1),
                },
                640: {
                  slidesPerView: Math.max(slidesPerView - 1, 1),
                },
                1024: {
                  slidesPerView
                },
              }}     
            navigation={true}
            autoplay={true}
            modules={[Navigation, Autoplay]}
        >
            {slides?.map((slide, key) => (
                <SwiperSlide key={key}>
                    <Card className='ring-0'>
                        <div className='h-[300px] w-[300px]'>
                        <Image className='object-cover hover:brightness-50 rounded-md' src={slide} fill alt='' />
                        </div>
                        {cta && <Button className="cta relative block mx-auto">Comprar ingresso</Button>}
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
  )

export default memo(CardSwiper)