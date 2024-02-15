import styled from "styled-components";
import { Wrap } from "../global/layout";

const Filters = styled.div``;
const Toggle = styled.div`
    & button{
        width: 32px;
        height: 32px;
    }
`;

export default function Filter() {
    return (
        <Toggle>
            <button className="
                border border-gray-400 rounded-circle d-flex align-items-center justify-content-center
            ">
                <span className="material-symbols-outlined fs-5 text-gray-800">filter_alt</span>
            </button>
        </Toggle>
    )
}