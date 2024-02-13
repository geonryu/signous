import { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";

const User = styled.div``;
const UserThumb = styled.div`
    & > img{width: 50px;}
`;
const Benefit = styled.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 1px;
        height: 50%;
        background-color: #dee2e6;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
const Coupon = styled.div`
    display: flex;
    justify-content: center;
    align-items-center;
    color: #fff;
    background-color: #ff4600;
    height: max-content;
`;

export default function UserControl() {
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
      
        return () => unsubscribe();
    }, []);

    return(
        <User>
            {
                user ? 
                <div>
                    <div className="d-flex align-items-cente gap-3">
                        <UserThumb><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Fanonymous.svg?alt=media&token=8818174d-0b79-4311-ae1c-30609c28574e" alt="" /></UserThumb>
                        <div>
                            <div><a href="/mypage" className="d-flex mb-1 align-items-center fs-5 fw-bold">{user.displayName}<span className="ms-1 d-block material-symbols-outlined text-gray-500">chevron_right</span></a></div>
                            {/* <div className="text-primary fs-6 fw-bold py-1 px-2 rounded bg-bg200">사이너스에 가입하고 최저가 견적을 받아보세요!</div> */}
                            <div className="fs-6 text-primary">사이너스에 오신 것을 환영합니다!</div>
                        </div>
                    </div>
                    <Benefit className="rounded border d-flex mt-3 border-gray-300">
                        <div className="w-100"><a href="#" className="d-block w-100 text-center py-2 fs-6">포인트</a></div>
                        <div className="w-100"><a href="#" className="d-flex align-items-center justify-content-center w-100 text-center py-2 fs-6">쿠폰<Coupon className="ms-1 fs-6 fw-bold rounded px-1">0</Coupon></a></div>
                    </Benefit>
                </div>
                :
                // <div><BtnRedirectionDefault className="black fw-bold">로그인/회원가입하기</BtnRedirectionDefault></div>
                <div>
                    <a href="/login" className="d-flex align-items-center gap-3">
                        <UserThumb><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Fanonymous.svg?alt=media&token=8818174d-0b79-4311-ae1c-30609c28574e" alt="" /></UserThumb>
                        <div>
                            <div className="d-flex mb-1 align-items-center fs-5 fw-bold">회원가입 / 로그인<span className="ms-1 d-block material-symbols-outlined">chevron_right</span></div>
                            <div className="text-primary fs-6 fw-bold py-1 px-2 rounded bg-bg200">사이너스에 가입하고 최저가 견적을 받아보세요!</div>
                        </div>
                    </a>
                </div>
            }
        </User>
    )
}