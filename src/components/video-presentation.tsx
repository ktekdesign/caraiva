import Image from "next/image"
import { Col, Grid, Icon, Text, Title } from "@tremor/react"
import { PlayIcon } from "@heroicons/react/24/solid"
import {Zoom} from 'react-awesome-reveal'
import Link from "next/link"
import FsLightbox from "fslightbox-react"

const Video = ({toggler, setToggler}) => (
        <div className="relative">
            <FsLightbox toggler={toggler} sources={[
                            'https://res.cloudinary.com/djgafxhsa/video/upload/v1694585197/pousada%20recanto%20da%20paz%20caraiva.mp4'
                        ]} />
            <Zoom>
                <Grid className="gap-8 mb-24 place-items-center" numItems={1} numItemsLg={3}>
                    <Col onClick={() => {
                        setToggler(!toggler)
                    }} numColSpanLg={2} className="relative min-h-[200px] lg:min-h-[400px] flex justify-center items-center cursor-pointer w-full">
                        <Image src="/images/caraiva.jpeg" alt="" fill className="brightness-50 object-cover rounded-lg" />
                        <Icon size="lg" icon={PlayIcon} className="play-btn relative" />
                    </Col>
                    <Col>
                    <Title className="heading2">Viva o melhor da Bahia</Title>
                    <Text>Bem-vindo a Caraiva: Onde a Beleza da Bahia Encontra a Magia da Natureza. Descubra as Maravilhas Desse Paraíso Encantador! 🌴🌊 #Caraiva #Bahia #Paraíso #Natureza #ViagemDosSonhos</Text>
                    <div className="text-center mt-8">
                        <Link href="https://www.google.com/maps/place/Recanto+da+Paz+Cara%C3%ADva/@-16.813339,-39.147745,17z/data=!4m6!3m5!1s0x7343bfde4d7c24d:0xe0c8b2630203a8c2!8m2!3d-16.8133393!4d-39.1477448!16s%2Fg%2F11khsfbkk4?hl=fr&entry=ttu" className="cta" target="_blank">Como chegar</Link>
                    </div>
                    </Col>
                </Grid>
            </Zoom>
        </div>
	)

export default Video