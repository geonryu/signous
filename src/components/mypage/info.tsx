import { useState } from "react";
import { auth } from "../../firebase";
import styled from "styled-components";
import { BtnWide } from "../global/buttons/buttons";
import { Section } from "../global/layout";
import { useNavigate } from "react-router-dom";
import Loading from "../global/loading";

const UserThumb = styled.div`
    & > img{width: 50px;}
`;

const Information = styled.div`
    position: relative;
`;

export default function Info() {
    const [user] = useState<any>(() => {
        const storedData = localStorage.getItem('user');
        return storedData ? JSON.parse(storedData) : false;
    });
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut();
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/");
    };

    return (
        <Section>
            <h3 className="mb-4 fw-bold">마이페이지</h3>
            <div className="d-flex align-items-cente gap-3 py-2">
                <UserThumb><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Fanonymous.svg?alt=media&token=8818174d-0b79-4311-ae1c-30609c28574e" alt="" /></UserThumb>
                <div>
                    <a href="#">
                        <div className="d-flex mb-1 align-items-center fs-5 fw-bold">{user ? user.displayName : null}</div>
                        <div className="fs-6 text-gray-600 d-flex align-items-center">프로필 편집<span className="ms-1 d-block material-symbols-outlined text-gray-500 fs-5">edit</span></div>
                    </a>
                </div>
            </div>
            <Information className="d-flex gap-2">
                <div className="w-100 p-2 rounded bg-bg200">
                    <div className="text-gray-600 fs-6 mb-1">보유쿠폰</div>
                    <div className="fs-3 fw-bold">0 <span className="fw-normal fs-6 text-gray-600">개</span></div>
                </div>
                <div className="w-100 p-2 rounded bg-bg200">
                    <div className="text-gray-600 fs-6 mb-1">내 포인트</div>
                    <div className="fs-3 fw-bold">0 <span className="fw-normal fs-6 text-gray-600">P</span></div>
                </div>
            </Information>
            <div className="py-3">
                <div className="border-bottom"><a href="#" className="d-flex align-items-center justify-content-between py-3"><span>찜 목록</span><span className="material-symbols-outlined text-gray-600">chevron_right</span></a></div>
                <div className="border-bottom"><a href="#" className="d-flex align-items-center justify-content-between py-3"><span>최근 본 컨텐츠</span><span className="material-symbols-outlined text-gray-600">chevron_right</span></a></div>
                <div className="border-bottom"><a href="#" className="d-flex align-items-center justify-content-between py-3"><span>리뷰 관리</span><span className="material-symbols-outlined text-gray-600">chevron_right</span></a></div>
                <div className="border-bottom"><a href="#" className="d-flex align-items-center justify-content-between py-3"><span>1:1 고객문의</span><span className="material-symbols-outlined text-gray-600">chevron_right</span></a></div>
                <div><a href="#" className="d-flex align-items-center justify-content-between py-3"><span>FAQ</span><span className="material-symbols-outlined text-gray-600">chevron_right</span></a></div>
            </div>
            <BtnWide className="border fw-bold text-black mt-2 active-primary" onClick={handleLogout}>로그아웃</BtnWide>
        </Section>
    )
}