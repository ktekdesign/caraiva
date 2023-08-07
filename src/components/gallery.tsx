"use client"
import { useState } from 'react'
import { photos } from "@/utils/photos"
import { Col, Grid, Text, Title } from "@tremor/react"
import Fade from 'react-reveal/Fade'

import Link from 'next/link'
import Image from 'next/image'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import FsLightbox from "fslightbox-react"

const Gallery = () => {
    const [toggler, setToggler] = useState(false)
    return (
        <section className="centered">
            <Grid numItemsLg={3} className="gap-8 pb-8">
                <Col numColSpanLg={2}>
                    <Title className="heading2 typing-effect w-full">Pousada Recanto da Paz</Title>
                </Col>
                <Col>
                    <Text>Viva o Paraíso de Caraiva: Encante-se com a Experiência Única de Hospedagem em Chalés Exclusivos!</Text>
                </Col>
            </Grid>
            <Fade up>   
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 4, 900: 5}}
                >
                    <Masonry>
                        {photos.map((photo, key) => (
                            <Link
                                onClick={(e) => {
                                    e.preventDefault()
                                    setToggler(!toggler)
                                }}
                                key={key}
                                href={photo}
                            >
                                <Image src={photo} width={300} height={0} alt='' />
                            </Link>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>   
            </Fade>
            <FsLightbox
                toggler={toggler}
                sources={photos}
            />
        </section>
    )
}
export default Gallery