import styled from "styled-components";
import { Wrap } from "../global/layout";

const Slide = styled.div`
    height: 240px;
`;

export default function MainVisual() {
    return (
        <Wrap>
            <Slide className="d-flex align-items-center rounded-4 bg-bg200 p-3">
                <h2 className="fw-bold fs-1 text-primary">
                    옥외광고의 모든 것,<br/>
                    사이너스
                </h2>
            </Slide>
        </Wrap>
    )
}