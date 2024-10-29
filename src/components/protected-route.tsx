import { ReactNode } from "react"
import ProtectedComponent from "components/protected-component"
import {Login, StickyPage} from "components"

export default async function ProtectedRoute ({children} : {children?: ReactNode}) {

    return (
        <main>
            <ProtectedComponent>
                <StickyPage />
                    <Login setActive={null} setToggle={null} />
                    {children}
            </ProtectedComponent>
        </main>
    )
}
