import { Outlet } from "react-router-dom";
import GlobalHeader from "../../components/global/header";
import { Wrap, Wrapper } from "../../components/global/layout";
import GlobalFooter from "../../components/global/footer";

export default function Mypage() {
    
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <Wrap>
                <Outlet />
            </Wrap> 
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}