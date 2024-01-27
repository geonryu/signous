import LoginForm from "../components/auth/loginForm";
import GlobalFooter from "../components/global/footer";
import GlobalHeader from "../components/global/header";
import { Wrap, Wrapper } from "../components/global/layout";


export default function Login() {
    
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <Wrap>
                <LoginForm></LoginForm>
            </Wrap> 
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}