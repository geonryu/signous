import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
    position: relative;
    height: 100vh;
`;
const List = styled.div`
    text-wrap: nowrap;
`;
const NavBtn = styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(10px, 5px);
`;


export default function AdminNav() {
    const [opn, setOpn] = useState(true);

    const handleNav = () => {
        setOpn(!opn);
    }

    return(
        <Nav className="bg-bg">
            <List className="text-white py-2 px-3">
                <a href="/admin" className="d-flex align-items-center">
                    <div><span className="material-symbols-outlined d-block">home</span></div>
                    {!opn ? <div className="ms-2">홈</div> : null}
                </a>
            </List>
            <List className="text-white py-2 px-3">
                <a href="/admin/members" className="d-flex align-items-center">
                    <div><span className="material-symbols-outlined d-block">manage_accounts</span></div>
                    {!opn ? <div className="ms-2">회원관리</div> : null}
                </a>
            </List>
            <List className="text-white py-2 px-3">
                <a href="/admin/partners" className="d-flex align-items-center">
                    <div><span className="material-symbols-outlined d-block">storefront</span></div>
                    {!opn ? <div className="ms-2">회원사관리</div> : null}
                </a>
            </List>
            <List className="text-white py-2 px-3">
                <a href="/admin/stores" className="d-flex align-items-center">
                    <div><span className="material-symbols-outlined d-block">view_list</span></div>
                    {!opn ? <div className="ms-2">업체색인</div> : null}
                </a>
            </List>
            <NavBtn onClick={handleNav}>
                <button type="button">{opn ? <span className="material-symbols-outlined fs-2">menu</span> : <span className="material-symbols-outlined fs-2">close</span>}</button>
            </NavBtn>
        </Nav>
    )
}