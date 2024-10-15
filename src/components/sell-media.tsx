"use client"
import Link from "next/link"
import Image from "next/image"
import {AttentionSeeker} from 'react-awesome-reveal'

const SellMedia = ({social = true, direction = "center"}) => (
    <AttentionSeeker effect="wobble" className="z-20">
        <div className={`flex justify-${direction} items-${direction} lg:items-center flex-col-reverse sm:flex-row gap-8 mt-4`}>
            <Link href="https://www.airbnb.com.br/rooms/1006904450489060869" target="_blank">
                <Image width={100} height={0} alt="" src="/images/airbnb.svg" className="hover:scale-125" />
            </Link>
            <Link href="https://www.booking.com/hotel/br/pousada-recanto-da-paz-caraiva.html" target="_blank">
                <Image width={150} height={0} alt="" src="/images/booking.svg" className="hover:scale-125" />
            </Link>
            {social && 
                <div className="flex gap-8 items-center">
                    <Link href="https://bit.ly/inforecantodapaz" target="_blank">
                        <Image width={30} height={0} alt="" src="/images/whatsapp-icon.svg" className="hover:scale-125" />
                    </Link>
                    <Link href="https://www.instagram.com/recantodapaz.caraiva/" target="_blank">
                        <Image src="/images/instagram.svg" alt="Instagram" width={30} height={0} className="rounded-full hover:scale-125" />
                    </Link>
                </div>
            }
        </div>
    </AttentionSeeker>
)

export default SellMedia