import styled from "styled-components";
import GlobalFooter from "../components/global/footer";
import GlobalHeader from "../components/global/header";
import ForgotIdForm from "../components/auth/forgotId";

const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow: hidden;
`;
const Main = styled.main`
    padding-top: 65px;
`;

export default function ForgotId() {
    
    return (
        <Wrapper>
            <Main>
                <GlobalHeader></GlobalHeader>
                <ForgotIdForm></ForgotIdForm>
                <GlobalFooter></GlobalFooter>
            </Main> 
        </Wrapper>
    )
}