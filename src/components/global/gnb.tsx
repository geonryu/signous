import styled from "styled-components"

const Gnb = styled.div``;
const List = styled.div``;

export default function GNB() {
    return (
        <Gnb className="py-3 d-flex flex-column h-100">
            <div>
                <List><a href="/" className="d-block py-2 fs-5 fw-bold">홈</a></List>
                <List><a href="" className="d-block py-2 fs-5 fw-bold">내 주변 업체 찾기</a></List>
                <List><a href="/partners" className="d-block py-2 fs-5 fw-bold">파트너센터</a></List>
            </div>
            <div className="mt-auto d-grid-2 gap-2">
                <div><a href="#" className="rounded border text-center text-gray-600 d-block py-2">고객센터</a></div>
                <div><a href="#" className="rounded border text-center text-gray-600 d-block py-2">자주 찾는 질문</a></div>
            </div>
        </Gnb>
    )
}