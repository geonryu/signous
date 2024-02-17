import { useState } from "react";
import styled, { css } from "styled-components";

const SelectBox = styled.div<{ isFocus: boolean }>`
    position: relative;
    border: 1px solid ${({ isFocus }) => (isFocus ? "#ff4600" : "#ced4da")};
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding: 0.375rem 0.75rem;
    background-color: white;
    cursor: pointer;
    height: 50px;
`;

const Label = styled.label<{ isFocus: boolean }>`
    position: absolute;
    top: ${({ isFocus }) => (isFocus ? "0" : "50%")};
    transform: translateY(-50%);
    left: 10px;
    background-color: white;
    padding: 0 5px;
    transition: top 0.3s ease;
    ${({ isFocus }) =>
        isFocus &&
        css`
        color: #ff4600;
        font-weight: bold;
        font-size: 12px;
        `}
    z-index: 1;
`;

const Options = styled.div`
    // display: none;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    background-color: #fff;
    border-top: none;
    z-index: 2;
    height: 170px;
    overflow: hidden scroll;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
    &.show {
        display: block;
    }
`;

const Option = styled.div`
    padding: 10px;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #f8f9fa;
    }
`;

export default function SelectWithLabel() {
  const [isFocus, setIsFocus] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);
  const handleSelectOption = (option: any) => {
    setSelectedOption(option);
    setIsFocus(false); // 옵션 선택 후 포커스 해제
  };

  return (
    <SelectBox isFocus={isFocus} tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        <Label isFocus={isFocus || selectedOption !== ""}>지역선택</Label>
        <Options className={isFocus ? "show" : ""}>
            <Option onClick={() => handleSelectOption("옵션 1")}>옵션 1</Option>
            <Option onClick={() => handleSelectOption("옵션 2")}>옵션 2</Option>
            <Option onClick={() => handleSelectOption("옵션 3")}>옵션 3</Option>
            <Option onClick={() => handleSelectOption("옵션 3")}>옵션 3</Option>
            <Option onClick={() => handleSelectOption("옵션 3")}>옵션 3</Option>
            <Option onClick={() => handleSelectOption("옵션 3")}>옵션 3</Option>
        </Options>
    </SelectBox>
  );
}
