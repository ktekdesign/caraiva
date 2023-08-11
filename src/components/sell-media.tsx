import Link from "next/link"
import Image from "next/image"

const SellMedia = ({social = true}) => (
    <div className="flex justify-center items-center flex-col-reverse md:flex-row gap-8 mt-4">
        <Link href="https://www.airbnb.com.br/rooms/854228588053595526" target="_blank">
            <Image width={100} height={0} alt="" src="/images/airbnb.svg" className="hover:scale-125" />
        </Link>
        <Link href="#" target="_blank">
            <Image width={150} height={0} alt="" src="/images/booking.svg" className="hover:scale-125" />
        </Link>
        {social && 
            <div className="flex gap-8 items-center">
                <Link href="https://bit.ly/inforecantodapaz" target="_blank">
                    <Image width={40} height={0} alt="" src="/images/whatsapp.svg" className="hover:scale-125" />
                </Link>
                <Link href="https://www.instagram.com/recantodapaz.caraiva/" target="_blank">
                    <Image src="/images/instagram.svg" alt="Instagram" width={32} height={32} className="rounded-full hover:scale-125" />
                </Link>
            </div>
        }
    </div>
)

export default SellMedia