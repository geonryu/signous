import { Outlet } from "react-router-dom"
import GlobalHeader from "../components/global/header"
import GlobalFooter from "../components/global/footer"
import { Wrapper } from "../components/global/layout"


export default function Layout() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <main>
                <Outlet />
            </main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}