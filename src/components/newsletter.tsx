"use client"
import { Button, Subtitle, TextInput, Title } from "@tremor/react"
import { MailIcon, PaperAirplaneIcon } from "@heroicons/react/solid"

const Newsletter = () => (
    <div>
        <Title className="heading3">Não perca nada</Title>
        <Subtitle>Fique informado de todos os eventos em Caraiva</Subtitle>
        <form className="py-2 flex" onSubmit={(e) => e.preventDefault()}>
            <TextInput className="rounded-e-none border-r-0" type="email" placeholder="Seu e-mail..." icon={MailIcon} />
            <Button className="bg-secondary ring-secondary border-secondary rounded-s-none border-l-0">
                <PaperAirplaneIcon className="fill-white w-8 rotate-90" />
                
            </Button>
        </form>

    </div>
)

export default Newsletter