import { memo } from "react"

const PageTitle = ({children}) => (
    <h1 className="heading1 page-title">{children}</h1>
)

export default memo(PageTitle)