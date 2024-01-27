import { Outlet } from "react-router-dom";
import GlobalHeader from "../../components/global/header";
import { Wrapper } from "../../components/global/layout";
import GlobalFooter from "../../components/global/footer";

export default function Partners() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <Outlet />
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}