import styled from "styled-components";
import { Wrap } from "./layout";
import Navigation from "./nav";
import { useEffect, useState } from "react";

const Header = styled.header`
    height: 70px;
`;

const BtnNavOpn = styled.div`
`;

export default function GlobalHeader() {
    const [navCtrl, setNavCtrl] = useState(false);

    useEffect(() => {
        console.log(navCtrl);
    }, [navCtrl]);

    const handleNav = () => {
        setNavCtrl(!navCtrl);
    }
    return(
        <Header>
            <Wrap className="h-100 py-2 d-flex align-items-center justify-content-between">
                <h1><a href="/"><img className="h-100" src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Flogo.svg?alt=media&token=5b8d2bac-50b2-4f41-99f6-34d4afca8afe" alt="사이너스" /></a></h1>
                <Navigation navState={navCtrl} setNavState={setNavCtrl}></Navigation>
                <BtnNavOpn>
                    <button onClick={handleNav} type="button" className="text-gray-700"><span className="fs-3 fw-bold material-symbols-rounded d-block">menu</span></button>
                </BtnNavOpn>
            </Wrap>
        </Header>
    )
}