"use client"
import { Button, Subtitle, TextInput, Title } from "@tremor/react"
import { MailIcon } from "@heroicons/react/solid"
import Image from "next/image"

const Newsletter = () => (
    <>
        <Title className="heading3">Não perca nada</Title>
        <Subtitle>Fique informado de todos os eventos em Caraiva</Subtitle>
        <form className="py-2 flex" onSubmit={(e) => e.preventDefault()}>
            <TextInput className="rounded-e-none border-r-0" type="email" placeholder="Seu e-mail..." icon={MailIcon} />
            <Button className="bg-primary border-primary rounded-s-none border-l-0"><Image src="/images/submit.png" width={21} height={18} alt="submit newsletter" /></Button>
        </form>

    </>
)

export default Newsletter