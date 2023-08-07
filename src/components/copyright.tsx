import { Bold } from "@tremor/react"
import Link from "next/link"

const Copyright = () => (
    <div className="copyright">
        <span>&copy; 2023 <Bold>ExperimenteCaraiva.</Bold> Todos os direitos reservados</span>
        <Link href='/politica-de-privacidade'>Politica de Privacidade</Link>
    </div>
)

export default Copyright