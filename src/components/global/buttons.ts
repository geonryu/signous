import styled from "styled-components";

export const BtnDefault = styled.button`
    display: block;
    padding: 0.5rem 1rem;
    font-size: 14px;
    border-radius: 0.5rem;

    &.primary{background-color: #ff4600; color: #fff;}
    &.black{background-color: #000; color: #fff;}
    &.border{border: 1px solid #ff4600; color: #ff4600}
    &.border-main{border: 1px solid #ff4600; color: #ff4600}
`;
export const BtnRedirectionDefault = styled.a`
    display: block;
    padding: 0.5rem 1rem;
    font-size: 14px;
    border-radius: 0.5rem;
    text-align: center;

    &.primary{background-color: #ff4600; color: #fff;}
    &.black{background-color: #000; color: #fff;}
    &.border{border: 1px solid #ff4600; color: #ff4600}
    &.border-gray{border: 1px solid #6c757d; color: #6c757d}
`;
export const BtnWide = styled.button`
    display: block;
    padding: 0.5rem 1rem;
    font-size: 14px;
    border-radius: 0.5rem;
    width: 100%;
    text-align: center;

    &.primary{background-color: #ff4600; color: #fff;}
    &.black{background-color: #000; color: #fff;}
    &.border{border: 1px solid #ff4600; color: #ff4600}
    &.border-gray{border: 1px solid #6c757d; color: #6c757d}
`;
export const BtnRedirectionWide = styled.a`
    display: block;
    padding: 0.5rem 1rem;
    font-size: 14px;
    border-radius: 0.5rem;
    width: 100%;
    text-align: center;
    &.primary{background-color: #ff4600; color: #fff;}
    &.black{background-color: #000; color: #fff;}
    &.border-gray{border: 1px solid #6c757d; color: #6c757d}
`;