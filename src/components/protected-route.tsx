import { ReactNode } from "react"
import ProtectedComponent from "./protected-component"
import LoginForm from "./login"
import StickyPage from "./sticky-page"

export default async function ProtectedRoute ({children} : {children?: ReactNode}) {

    return (
        <main>
            <ProtectedComponent>
                <StickyPage />
                    <LoginForm setActive={null} setToggle={null} />
                    {children}
            </ProtectedComponent>
        </main>
    )
}
