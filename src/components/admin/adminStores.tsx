import { useEffect, useState } from "react";
import { Wrap } from "../global/layout";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Ctrl = styled.div`
    & .pop{
        position: absolute;
        top: 100%;
        right: 0;
    }
`;
const StoreList = styled.div`
    & > div{border-bottom: 1px solid #e9ecef; font-size: 12px;}
    & > div:last-child{border-bottom: 0;}
    & > div:hover{background-color: #e9ecef;}
`;

export default function AdminStores() {
    const [search, setSearch] = useState(false);
    const [sort, setSort] = useState(false);
    const [more, setMore] = useState(false);
    const [documents, setDocuments] = useState<any[]>([]);

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

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'stores'));
    
            const documentData = querySnapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
            console.log(documentData);
            setDocuments(documentData);
    
          } catch (error) {
            console.error('Error getting documents:', error);
          }
        };
    
        fetchData();
    }, [db]);

    return (
        <Wrap className="py-5">
            <div className="d-flex flex-wrap align-items-center position-relative">
                <h4 className="m-0 fw">업체 색인</h4>
                <div className="ms-auto d-flex align-items-center">
                    <button onClick={handleSearch} type="button" className="px-1 d-flex align-items-center"><span className="material-symbols-outlined fs-5 text-gray-600">search</span></button>
                    <button onClick={handleSort} type="button" className="px-1 d-flex align-items-center"><span className="material-symbols-outlined fs-5 text-gray-600">sort</span></button>
                    <button onClick={handleMore} type="button" className="px-1 d-flex align-items-center"><span className="material-symbols-outlined fs-5 text-gray-600">more_horiz</span></button>
                </div>
                <Ctrl className="w-100 border-bottom pb-2">
                    {search ? <div className=" pt-2"><form action=""><input className="d-block w-100 border rounded-4 py-1 px-2 fs-6" type="text" placeholder="업체명, 장소로 검색" /></form></div> : null}
                    {sort ? (
                        <div className="d-flex gap-2 flex-wrap pt-2">
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
                <div className="mb-3 d-flex justify-content-end"><button type="button"><span className="material-symbols-outlined d-block text-gray-500">add_circle</span></button></div>
                <StoreList className="border-top border-bottom">
                    {
                        documents.map((mem, i)=> {
                            return (
                                <div className="py-2" key={"test" + i}>
                                    <div className="fs-6">{mem.storeName}</div>
                                    <div className="d-flex text-gray-700">
                                        <div className="me-1">{mem.city}</div>
                                        <div className="me-1">{mem.gu}</div>
                                        <div className="">{mem.dong}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </StoreList>
            </div>
        </Wrap>
    );
}