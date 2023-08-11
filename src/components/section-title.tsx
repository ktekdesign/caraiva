import { memo } from "react"

const SectionTitle = ({children}) => (
    <div className="flex gap-8 pb-8 items-center justify-between centered">
        {children}
    </div>
)

export default memo(SectionTitle)