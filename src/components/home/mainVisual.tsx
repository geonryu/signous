import styled from "styled-components";
import { Wrap } from "../global/layout";
import { BtnRedirectionDefault } from "../global/buttons/buttons";

const Slide = styled.div`
    /* height: 240px; */
`;
// const MLogo = styled.div`width: 92px;`;


export default function MainVisual() {
    return (
        <Wrap>
            {/* <Symbol><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Fapp-icon.svg?alt=media&token=bc979106-1cc3-4ed3-95a7-f473179c83e1" alt="" /></Symbol> */}
            <Slide>
                <a href="/stores" className="d-flex justify-content-center flex-column rounded-4 bg-primary p-4 h-100">
                    <h2 className="fw-bold fs-2 text-primary text-white">
                        {/* <MLogo>
                            <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Flogo.svg?alt=media&token=8b503ecc-ccaa-4d0d-9d68-d03120a8f825" alt="" />
                        </MLogo> */}
                        옥외광고의 모든 것,<br/>
                        사이너스
                    </h2>
                    <div className="mt-2 mb-3 fs-6 text-bg400">디자인부터 시공과 보수까지<br />사이너스에서 찾으세요!</div>
                    {/* <BtnRedirectionDefault className="primary"></BtnRedirectionDefault> */}
                    <div className="border bg-white rounded-pill py-2 px-3 fs-6 text-gray-600 d-flex align-items-center">
                        <span className="material-symbols-outlined fs-6 text-bg600 me-1">my_location</span>
                        <span>주변의 광고업체를 찾아보세요.</span>
                        <span className="material-symbols-outlined ms-auto text-gray-500">search</span>
                    </div>
                </a>
            </Slide>
        </Wrap>
    )
}