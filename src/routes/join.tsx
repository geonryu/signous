import GlobalHeader from "../components/global/header";
import GlobalFooter from "../components/global/footer";
import { Wrapper } from "../components/global/layout";
import SignupForm from "../components/auth/signupForm";


export default function Signup() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <main>
                <SignupForm></SignupForm>
            </main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}