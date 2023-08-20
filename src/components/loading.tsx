import { Title } from "@tremor/react"
import Image from "next/image"

const Loading = () => (
    <div className="flex flex-col gap-4">
        <Title className="heading2">Aguarde</Title>
        <p>Estamos procurando as melhores ofertas para você</p>
        <Image src="/images/loading.svg" width={250} height={250} alt="loading" className="mx-auto" />
    </div>
)

export default Loading