import styled from "styled-components";

const Search = styled.div``;

export default function SearchBox() {
    return (
        <Search className="rounded-pill bg-gray-100 py-2 px-3 d-flex align-items-center gap-2 w-100">
            <div className="">
                <span className="d-block material-symbols-outlined fs-5 text-gray-600">search</span>
            </div>
            <div className="fs-6">지역별, 카테고리별 검색</div>
        </Search>
    )
}