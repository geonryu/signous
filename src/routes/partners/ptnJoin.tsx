import GlobalFooter from "../../components/global/footer";
import GlobalHeader from "../../components/global/header";
import { Wrapper } from "../../components/global/layout";
import PartnerJoin from "../../components/partners/partnerAuth/partnerJoin";


export default function PtnJoin() {
    return (
        <Wrapper>
            <GlobalHeader></GlobalHeader>
            <main>
                <PartnerJoin></PartnerJoin>
            </main>
            <GlobalFooter></GlobalFooter>
        </Wrapper>
    )
}