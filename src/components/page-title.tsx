import { memo, ReactNode } from "react"

const PageTitle = ({title, children}: {title: string, children?: ReactNode}) => (
    <section>
        <h1 className="heading1 page-title">{title}</h1>
        <>{children}</>
    </section>
)

export default memo(PageTitle)