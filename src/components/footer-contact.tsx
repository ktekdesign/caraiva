import { Title, Text } from "@tremor/react"
import Link from "next/link"
import Image from "next/image"

const FooterContact = () => (
    <div>
        <Title className="heading3">Entre em contato nas redes socias</Title>
        <p className="flex gap-4 items-center">
            <Link href="https://www.instagram.com/recantodapaz.caraiva/" target="_blank"><Image src="/images/instagram.svg" alt="Instagram" width={36} height={36} className="rounded-full" /></Link>
            <Link href="" target="_blank"><Image src="/images/facebook.svg" alt="Facebook" width={36} height={36} /></Link>
            <Link href="https://bit.ly/inforecantodapaz" target="_blank"><Image src="/images/whatsapp.svg" alt="Whatsapp" width={42} height={42} /></Link>
        </p>
        <Text>Caraiva, Bahia, Brasil</Text>
    </div>
)

export default FooterContact