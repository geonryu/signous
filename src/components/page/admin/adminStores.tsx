import { useState } from "react";
import { Wrap } from "../../global/layout";
import styled from "styled-components";

const Ctrl = styled.div`
    & .pop{
        position: absolute;
        top: 100%;
        right: 0;
    }
`;

export default function AdminStores() {
    const [search, setSearch] = useState(false);
    const [sort, setSort] = useState(false);
    const [more, setMore] = useState(false);

    const handleSearch = () => {
        if(search === true) {
            setSearch(false);
        } else {
            setSearch(true);
            setSort(false);
            setMore(false);
        } 
    }
    const handleSort = () => {
        if(sort === true) {
            setSort(false);
        } else {
            setSort(true);
            setSearch(false);
            setMore(false);
        } 
    }
    const handleMore = () => {
        if(more === true) {
            setMore(false);
        } else {
            setMore(true);
            setSort(false);
            setSearch(false);
        } 
    }

    return (
        <Wrap className="py-5">
            <div className="d-flex flex-wrap align-items-center position-relative">
                <h4 className="m-0 fw">업체 색인</h4>
                <div className="ms-auto d-flex align-items-center">
                    <button onClick={handleSearch} type="button" className="px-1 d-flex align-items-center"><span className="material-symbols-outlined fs-5 text-gray-600">search</span></button>
                    <button onClick={handleSort} type="button" className="px-1 d-flex align-items-center"><span className="material-symbols-outlined fs-5 text-gray-600">sort</span></button>
                    <button onClick={handleMore} type="button" className="px-1 d-flex align-items-center"><span className="material-symbols-outlined fs-5 text-gray-600">more_horiz</span></button>
                </div>
                <Ctrl className="w-100">
                    {search ? <div className=" py-2"><form action=""><input className="d-block w-100 border rounded-4 py-1 px-2 fs-6" type="text" placeholder="업체명, 장소로 검색" /></form></div> : null}
                    {sort ? (
                        <div className="d-flex gap-2 flex-wrap py-2">
                            <div className="badge text-gray-700 fw-normal border">거리순</div>
                            <div className="badge text-gray-700 fw-normal border">인기순</div>
                            <div className="badge text-gray-700 fw-normal border">가나다순</div>
                            <div className="badge text-gray-700 fw-normal border">최신등록순</div>
                        </div>
                    ) : null}
                    {more ? (
                    <div className="pop p-2 rounded shadow-sm border">
                        <div className="fs-6 text-gray-700"><a className="d-block py-1" href="#">엑셀내려받기</a></div>
                        <div className="fs-6 text-gray-700"><a className="d-block py-1" href="#">Google Sheet</a></div>
                    </div>
                    ) : null}
                </Ctrl>
            </div>
            <div className="py-3">
                <div className="border-top border-bottom p-1">asdasd</div>
            </div>
        </Wrap>
    );
}