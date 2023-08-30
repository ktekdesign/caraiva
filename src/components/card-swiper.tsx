"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Card } from '@tremor/react'
import { memo } from 'react'
import BuyButton from './buy-button'
import { CldImage } from 'next-cloudinary'

const CardSwiper = ({slides, slidesPerView = 3, cta = false}) => (
        <Swiper
            spaceBetween={20}
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
                    <Card className='ring-0 p-0'>
                        <div className='relative w-full'>
                          <CldImage
                              width="750"
                              height="450"
                              src={slide} alt=""
                              className='object-cover w-full h-full min-h-[450] hover:brightness-50 rounded-md'
                          />
                        
                        </div>
                        {cta && <BuyButton className="absolute z-20 -mt-16 w-full text-center" />}
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
  )

export default memo(CardSwiper)