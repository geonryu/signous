import styled from "styled-components"

const StarIco = styled.div`
    & svg{
        width: 10px;
        stroke-width: 1px;
        fill: #dee2e6; stroke: #dee2e6;
    }

    &.white-fill svg{fill: #ffffff; stroke: #ffffff;}
    &.white-stroke svg{fill: none; stroke: #ffffff;}
    &.primary-fill svg{fill: #ff4600; stroke: #ff4600;}
    &.primary-stroke svg{fill: none; stroke: #ff4600;}

`;

export default function Star(props: any) {
    return (
        <StarIco className={`${props.theme}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
        </StarIco>
    )
}