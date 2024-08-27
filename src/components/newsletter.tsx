"use client"
import { Button, Text, TextInput, Title } from "@tremor/react"
import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid"

const Newsletter = () => (
    <div>
        <Title className="heading3">Não perca nada</Title>
        <Text>Fique informado de todos os eventos em Caraiva</Text>
        <form className="py-2 flex" onSubmit={(e) => e.preventDefault()}>
            <TextInput className="rounded-e-none border-r-0" type="email" placeholder="Seu e-mail..." icon={EnvelopeIcon} />
            <Button className="bg-secondary ring-secondary border-secondary rounded-s-none border-l-0">
                <PaperAirplaneIcon className="fill-white w-8 rotate-90" />
                
            </Button>
        </form>

    </div>
)

export default Newsletter