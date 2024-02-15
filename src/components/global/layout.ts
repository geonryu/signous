import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`;

export const Wrap = styled.div`
    padding: 0 0.75rem;
    max-width: 1320px;
    margin: 0 auto;
    @media (min-width: 576px) {padding: 0 1rem;}
    @media (min-width: 992px) {padding: 0 1.5rem;}
`;

export const Flex = styled.div`
    display: flex;
`;

export const Section = styled.section`
    padding: 2rem 0;
`;

export const Ellipsis = styled.div`
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    word-wrap: break-word;
    &.ellipsis-1{-webkit-line-clamp: 1;}
    &.ellipsis-2{-webkit-line-clamp: 2;}
    &.ellipsis-3{-webkit-line-clamp: 3;}
    &.ellipsis-4{-webkit-line-clamp: 4;}
    &.ellipsis-5{-webkit-line-clamp: 5;}
    &.ellipsis-6{-webkit-line-clamp: 6;}
`;