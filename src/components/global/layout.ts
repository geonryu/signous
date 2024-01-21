import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`;

export const Wrap = styled.div`
    padding: 0 .75rem;
    max-width: 1320px;
    margin: 0 auto;
    @media (min-width: 576px) {padding: 0 1rem;}
    @media (min-width: 992px) {padding: 0 1.5rem;}
`;

export const Flex = styled.div`
    display: flex;
`;

export const Section = styled.section`
    padding: 3rem;
`;