import styled from "styled-components";

export const BtnDefault = styled.button`
    display: block;
    padding: 0.5rem 1rem;
    font-size: 14px;
    border-radius: 0.5rem;
    width: max-content;

    &.primary{background-color: #ff4600; color: #fff;}
    &.black{background-color: #000; color: #fff;}
    &.border{border: 1px solid #ff4600; color: #ff4600}
    &.border-main{border: 1px solid #ff4600; color: #ff4600}

    &.primary.disable{background-color: #ffc7b2; color: #fff;}
    &.black.disable{background-color: #c4c4c4};
    &.border.disable{border: 1px solid #ffc7b2; color: #ffc7b2}
    &.border-gray.disable{border: 1px solid #c0c0c0; color: #c0c0c0}
`;
export const BtnRedirectionDefault = styled.a`
    display: block;
    padding: 0.5rem 1rem;
    font-size: 14px;
    border-radius: 0.5rem;
    text-align: center;
    width: max-content;

    &.primary{background-color: #ff4600; color: #fff;}
    &.black{background-color: #000; color: #fff;}
    &.border{border: 1px solid #ff4600; color: #ff4600}
    &.border-gray{border: 1px solid #6c757d; color: #6c757d}

    &.primary.disable{background-color: #ffc7b2; color: #fff;}
    &.black.disable{background-color: #c4c4c4};
    &.border.disable{border: 1px solid #ffc7b2; color: #ffc7b2}
    &.border-gray.disable{border: 1px solid #c0c0c0; color: #c0c0c0}
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

    &.primary.disable{background-color: #ffc7b2; color: #fff;}
    &.black.disable{background-color: #c4c4c4};
    &.border.disable{border: 1px solid #ffc7b2; color: #ffc7b2}
    &.border-gray.disable{border: 1px solid #c0c0c0; color: #c0c0c0}
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

    &.primary.disable{background-color: #ffc7b2; color: #fff;}
    &.black.disable{background-color: #c4c4c4};
    &.border.disable{border: 1px solid #ffc7b2; color: #ffc7b2}
    &.border-gray.disable{border: 1px solid #c0c0c0; color: #c0c0c0}
`;