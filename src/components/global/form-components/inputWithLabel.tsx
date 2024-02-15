import { useState } from "react";
import styled, { css } from "styled-components";

// InputBox와 Label 스타일 조정
const InputBox = styled.div<{isFocus: boolean}>`
    position: relative;
    border: 1px solid ${({ isFocus }) => (isFocus ? "#ff4600" : "#ced4da")};
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    & input{
        height: 50px;
        border: none;
        outline: none;
        width: 100%;
        padding: 0.375rem 0.75rem;
    }
`;

const Label = styled.label<{isFocus: boolean}>`
    position: absolute;
    top: ${({ isFocus }) => (isFocus ? "0" : "50%")};
    transform: translateY(-50%);
    left: 10px;
    background-color: white;
    padding: 0 5px;
    transition: all 0.3s ease;
    ${({ isFocus }) =>
        isFocus &&
        css`
            color: #ff4600;
            font-weight: bold;
            font-size: 12px;
        `}
`;

export default function InputWithLabel(props: any) {
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = () => setIsFocus(true);
    const handleBlur = () => setIsFocus(false);

    return (
        <InputBox isFocus={isFocus} className="rounded">
            <Label isFocus={isFocus}>{props.label}</Label>
            <input 
                type="text" 
                onFocus={handleFocus} 
                onBlur={handleBlur} // onBlur 이벤트 핸들러 추가
            />
        </InputBox>
    );
}
