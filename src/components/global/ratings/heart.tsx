import styled from "styled-components";

const HeartIco = styled.div`
    & svg{
        width: 24px;
        stroke-width: 1px;
        fill: #ced4da; stroke: #ced4da;
    }

    &.white-fill svg{fill: #ffffff; stroke: #ffffff;}
    &.white-stroke svg{fill: none; stroke: #ffffff;}
    &.primary-fill svg{fill: #ff4600; stroke: #ff4600;}
    &.primary-stroke svg{fill: none; stroke: #ff4600;}

`;

export default function Heart(props: any) {
    return (
        <HeartIco className={`${props.theme}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </HeartIco>
    )
}