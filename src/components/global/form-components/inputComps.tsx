import styled from "styled-components"

const Input = styled.input``;
// const Label = styled.label``;

export default function InputComps(props: any) {
    const attr = {...props.attr}
    console.log(attr.title);
    return (
        <div>
            {/* <Label className="fs-6">{attr.title}</Label> */}
            <Input {...attr} className="px-2 py-2 bg-white border border-gray-500 d-block rounded w-100"></Input>
        </div>
    )
}