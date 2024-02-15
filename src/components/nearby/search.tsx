import styled from "styled-components";

const Search = styled.div``;

export default function SearchBox() {
    return (
        <Search className="rounded-pill bg-gray-100 py-2 px-3 d-flex align-items-center gap-2 w-100">
            <div className="">
                <span className="d-block material-symbols-outlined fs-5 text-gray-600">search</span>
            </div>
            <div className="fs-6">
                <span>동해물과</span>&nbsp;
                <span>백두산이</span>&nbsp;
                <span>마르고</span>
            </div>
        </Search>
    )
}