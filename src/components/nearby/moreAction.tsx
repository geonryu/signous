import styled from "styled-components"
import { Wrap } from "../global/layout";
import BasicSwitch from "../global/buttons/basicSwitch";

const Actions = styled.div``;
const PartnersOnly = styled.div`

`;
const Sort = styled.div``;

export default function MoreAction() {
    return (
        <Actions>
            <Wrap>
                <PartnersOnly className="d-flex align-items-center justify-content-between">
                    <div className="fs-6 fw-bold">
                        <button type="button" className="d-flex align-items-center gap-1">
                            사이너스 입점 업체만 보기
                            <span className="material-symbols-outlined text-primary fs-5">help</span>
                        </button>
                    </div>
                    <BasicSwitch></BasicSwitch>
                </PartnersOnly>
            </Wrap>
        </Actions>
    )
}