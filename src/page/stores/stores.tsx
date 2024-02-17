import { useState } from "react";
import { Wrap } from "../../components/global/layout";
import Filter from "../../components/stores/filters";
import MoreAction from "../../components/stores/moreAction";
import SearchBox from "../../components/stores/search";
import StoreLists from "../../components/stores/storeLists";
import FilterPop from "../../components/stores/filterPop";

export default function Stores() {
    const [filterPop, setFilterPop] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        region: "전체",
    });
    const [fetchDatas, setFetchDatas] = useState({
        add1 : "서울"
    });

    // useEffect(() => {
    //     console.log(selectedFilters);
    // }, [fetchDatas])

    const handlePop = () => {
        setFilterPop(!filterPop);
    }

    const handleClose = () => {
        setFilterPop(false);
    };

    const handleSaveChanges = (region: string) => {
        // console.log("Filters saved:", region);
        setFetchDatas({add1: region});
        setSelectedFilters({ ...selectedFilters, region });
    };

    return (
        <div>
            {filterPop && (
                <FilterPop
                    initialState={filterPop}
                    onClose={handleClose}
                    onSave={handleSaveChanges}
                    selectedRegion={selectedFilters.region}
                />
            )}
            <div className="position-sticky top-0 bg-white">
                <Wrap className="d-flex gap-2 py-3">
                    <div onClick={handlePop} className="w-100"><SearchBox></SearchBox></div>
                    <Filter></Filter>
                </Wrap>
                <Wrap className="pb-2 text-gray-800 fs-6">'{selectedFilters.region === "전체" ? "서울 중구" : selectedFilters.region}'의 검색 결과</Wrap>
                <div className="py-2 bg-bg200 shadow-sm">
                    <Wrap>
                        <MoreAction></MoreAction>
                    </Wrap>
                </div>
            </div>
            <StoreLists data={fetchDatas}></StoreLists>
        </div>
    )
}