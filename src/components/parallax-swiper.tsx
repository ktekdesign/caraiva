"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Parallax, Autoplay } from 'swiper/modules'
import { memo } from 'react'
import BuyButton from './buy-button'
import { CldImage } from 'next-cloudinary'

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
                        <CldImage
                            width="1440"
                            height="1040"
                            src={slide} alt=""
                            className='hover:brightness-50'
                        />
                        <BuyButton className="z-20 absolute w-full text-center top-1/2" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )

export default memo(ParallaxSwiper)