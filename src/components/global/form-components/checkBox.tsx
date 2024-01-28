import { useEffect, useState } from "react";
import styled from "styled-components"

const Input = styled.input`
    overflow: hidden; background: transparent; visibility: hidden; -webkit-appearance: none; -moz-appearance: none; -ms-appearance: none; appearance: none; position: absolute;
    top: 2px;  width: 1px; height: 1px;  
    &:checked+label::after{border-color: #EB5602;}
    &:checked+label{color: #EB5602;}
    & ~ label{position: relative; padding-left: 26px; cursor: pointer; color: #000; display: flex; flex-direction: row-reverse; justify-content: flex-end; align-items: center;}
    & ~ label::after{
        content: ''; display: block; box-sizing: content-box;
        position: absolute;
        top: 50%; left: 6px;
        border: 1px solid #ced4da;
        border-width: 0 2px 2px 0;
        margin-top: -8px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        width: 5px;
        height: 10px;
    }
`;
const Label = styled.label``;

interface CheckboxState {
    allChecked: boolean;
    agree1: boolean;
    agree2: boolean;
    agree3: boolean;
}
  

export default function CheckboxComps(props: any) {
    const attr = props.attr
    const [checkboxState, setCheckboxState] = useState<CheckboxState>({
        allChecked: false,
        agree1: false,
        agree2: false,
        agree3: false
    });
    
    const handleCheckboxChange = (checkbox: keyof CheckboxState) => {
        const newState = { ...checkboxState };    
        if(checkbox === 'allChecked') {
            const isChecked = !newState.allChecked;
            newState.allChecked = isChecked;
            newState.agree1 = isChecked;
            newState.agree2 = isChecked;
            newState.agree3 = isChecked;
        } else {
            newState[checkbox] = !newState[checkbox];
            // 이 부분을 수정하여 allChecked 상태를 올바르게 설정합니다.
            newState.allChecked = newState.agree1 && newState.agree2 && newState.agree3;
        }
        setCheckboxState(newState);
    };  

    useEffect(() => {
        setCheckboxState(prevState => ({
            ...prevState,
            allChecked: prevState.agree1 && prevState.agree2 && prevState.agree3,
        }));

        const isSubmitDisabled = checkboxState.agree1 && checkboxState.agree2;
        
        props.setState(isSubmitDisabled);
    }, [checkboxState.agree1, checkboxState.agree2, checkboxState.agree3]); 

    
    return (
        <div>
            <div className="pb-4 border-bottom">
                <Input id="agreeAll" type="checkbox" checked={checkboxState.allChecked} onChange={() => handleCheckboxChange('allChecked')} />
                <Label htmlFor="agreeAll">모두 동의 (선택 항목 포함)</Label>
            </div>
            <div className="pt-3">
                {
                    attr.map((checkbox: any, i: any) => {
                        return (
                            <div key={`ckbx${i}`} className="d-flex align-items-center py-2">
                                <Input
                                    type="checkbox"
                                    {...attr}
                                    id={checkbox.id}
                                    checked={checkboxState[`agree${i+1}` as keyof CheckboxState]}
                                    onChange={() => handleCheckboxChange(`agree${i+1}` as keyof CheckboxState)}
                                />
                                <Label htmlFor={checkbox.htmlFor}>{checkbox.title}</Label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}