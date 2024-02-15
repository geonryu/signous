import { Wrap } from "../../components/global/layout";
import Filter from "../../components/nearby/filters";
import MoreAction from "../../components/nearby/moreAction";
import SearchBox from "../../components/nearby/search";
import StoreLists from "../../components/nearby/storeLists";

export default function Stores() {
    return (
        <div>
            <div className="position-sticky top-0 bg-white">
                <Wrap className="d-flex gap-2 py-3">
                    <SearchBox></SearchBox>
                    <Filter></Filter>
                </Wrap>
                <Wrap className="pb-2 text-gray-800 fs-6">'서울특별시 중랑구 묵동', '카테고리'의 검색 결과</Wrap>
                <div className="py-2 bg-bg200 shadow-sm"><MoreAction></MoreAction></div>
            </div>
            <StoreLists></StoreLists>
        </div>
    )
}