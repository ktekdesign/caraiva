import { Title, Text } from "@tremor/react"
import Link from "next/link"
import Image from "next/image"

const FooterContact = () => (
    <div>
        <Title className="heading3">Entre em contato nas redes socias</Title>
        <p className="flex gap-4">
            <Link href=""><Image src="/images/instagram.png" alt="Instagram" width={36} height={36} /></Link>
            <Link href=""><Image src="/images/facebook.png" alt="Facebook" width={32} height={32} /></Link>
            <Link href=""><Image src="/images/whatsapp.png" alt="Whatsapp" width={32} height={32} /></Link>
        </p>
        <Text>Caraiva, Bahia, Brasil</Text>
    </div>
)

export default FooterContact