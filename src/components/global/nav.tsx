import styled from "styled-components";
import { Wrap } from "./layout";
import UserControl from "./user";
import GNB from "./gnb";

const Nav = styled.nav`
    z-index: 999999;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    transition: left 0.3s;
    background-color: #fff;
    &.opn{
        left: 0;
    }
`;

const BtnClose = styled.div`
    height: 70px;
    display: flex;
    justify-content: end;
`;

export default function Navigation(props :any) {

    const handleClose = () => {
        props.setNavState(!props.navState);
    }
    return(
        <Nav className={`${props.navState ? "opn" : ""}`}>
            <Wrap className="d-flex flex-column h-100">
                <BtnClose><button onClick={handleClose}><span className="material-symbols-outlined">close</span></button></BtnClose>
                <UserControl></UserControl>
                <GNB></GNB>
            </Wrap>
        </Nav>
    )
}