import GlobalHeader from "../components/global/header";
import GlobalFooter from "../components/global/footer";
import JoinForm from "../components/auth/joinForm";
import { Wrapper } from "../components/global/layout";


export default function Join() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <main>
                <JoinForm></JoinForm>
            </main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}