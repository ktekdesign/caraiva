"use client"
import { useState } from "react"
import FsLightbox from "fslightbox-react"
import Image from "next/image"
import { Col, Grid, Icon, Text, Title } from "@tremor/react"
import { PlayIcon } from "@heroicons/react/solid"
import Zoom from 'react-reveal/Zoom'
import Link from "next/link"

const Video = () => {
    const [toggler, setToggler] = useState(false);

	return (
        <section className="centered">
            <FsLightbox
                    toggler={toggler}
                    sources={[
                        'https://www.youtube.com/watch?v=QKUxLI1HCq0'
                    ]}
                />
            <Zoom>
            <Grid className="gap-8 mb-24 place-items-center" numItems={1} numItemsLg={3} onClick={() => setToggler(!toggler)}>
                <Col numColSpanLg={2} className="relative min-h-[200px] lg:min-h-[400px] flex justify-center items-center cursor-pointer w-full">
                    <Image src="/images/caraiva.jpeg" alt="" fill className="brightness-50 object-cover" />
                    <Icon size="lg" icon={PlayIcon} className="play-btn relative" />
                </Col>
                <Col>
                <Title className="heading2">Viva o melhor da Bahia</Title>
                <Text>Bem-vindo a Caraiva: Onde a Beleza da Bahia Encontra a Magia da Natureza. Descubra as Maravilhas Desse Paraíso Encantador! 🌴🌊 #Caraiva #Bahia #Paraíso #Natureza #ViagemDosSonhos</Text>
                <div className="text-center mt-8">
                    <Link href="/como-chegar" className="cta-reverse">Como chegar</Link>
                </div>
                </Col>
            </Grid>
            </Zoom>
        </section>
	)
}

export default Video