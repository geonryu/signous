import { useState } from "react";
import styled from "styled-components";
import { BtnRedirectionDefault } from "./buttons";

const User = styled.div``;
const UserThumb = styled.div`
    & > img{width: 50px;}
`;

export default function UserControl() {
    const [user, setUser] = useState<any>(null);

    return(
        <User>
            {
                user ? 
                <div>??</div>
                :
                // <div><BtnRedirectionDefault className="black fw-bold">로그인/회원가입하기</BtnRedirectionDefault></div>
                <div>
                    <a href="/login" className="d-flex align-items-center">
                        <UserThumb className="pe-2"><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Fanonymous.svg?alt=media&token=8818174d-0b79-4311-ae1c-30609c28574e" alt="" /></UserThumb>
                        <div>
                            <div className="d-flex mb-2 align-items-center fs-5 fw-bold">회원가입 / 로그인<span className="ms-2 d-block material-symbols-outlined">chevron_right</span></div>
                            <div className="text-primary fs-6 fw-bold py-1 px-2 rounded bg-bg200">사이너스에 가입하고 최저가 견적을 받아보세요!</div>
                        </div>
                    </a>
                </div>
            }
        </User>
    )
}