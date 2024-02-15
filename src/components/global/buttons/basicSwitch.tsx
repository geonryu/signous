import { useState } from "react";
import styled from "styled-components"

const Switch = styled.div`
    width: 32px;
    height: 14px;
    border-radius: 100px;
    background-color: #ced4da;
    position: relative;
    transition: all 0.15s;

    & input{appearance: none;}

    &::after{
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 1px 1px 2.5px rgba(0,0,0,0.2);
        border: 1px solid #f5f5f5;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        transition: all 0.15s;
    }
    &.on::before{
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-color: #ffa27f;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        animation: extend 0.15s 0.1s;
        border-radius: 50%;
    }
    @keyframes extend {
        0%{opacity: 1; transform: translateY(-50%) scale(1)}
        100%{opacity: 0; transform: translateY(-50%) scale(2)}
    }

    &.on{
        background-color: #ffa27f;
    }
    &.on::after{
        background-color: #ff4600;
        left: 12px;
        border-color: #ff4600;
    }
`;

export default function BasicSwitch() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <Switch onClick={handleToggle} className={`
            ${toggle ? "on" : "off"}
        `}>
            <input type="checkbox" value={`${toggle}`}/>
        </Switch>
    )
}