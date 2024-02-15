import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap } from '../global/layout';
import koreaAdminDistrict from '../../modules/datas/koreaAdminDistrict';
import { BtnWide } from '../global/buttons/buttons';

interface FilterPopProps {
    initialState: boolean;
    onClose: () => void;
    onSave: (region: string) => void;
    selectedRegion: string;
}

const Pop = styled.div<{ $state: boolean }>`
    z-index: 99999;
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    top: ${({ $state }) => ($state ? '0' : '100%')};
    opacity: ${({ $state }) => ($state ? '1' : '0')};
`;
const PopHeader = styled.div`height: 62px; position: relative;`;
const BtnClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
`;
const PopBody = styled.div`
    height: calc(100vh - 50px - 78px);
    overflow-y: scroll;
`;

const PopSubmit = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    left:0;
`;

const Region = styled.div<{ $isSelected: boolean }>`
    border: 1px solid #f0f0f0;
    ${({ $isSelected }) => $isSelected && `
        border: 0;
        background-color: #ff4600;
        color: #fff;
    `}
`;
const District = styled.div`
    border: 1px solid #f0f0f0;
    width: max-content;
`;

const FilterPop: React.FC<FilterPopProps> = ({ initialState, onClose, onSave, selectedRegion }) => {
    const [$state, set$State] = useState(initialState);
    const [tempSelectedRegion, setTempSelectedRegion] = useState(selectedRegion);
    const [districts, setDistricts] = useState<string[]>([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => set$State(true), 10);
        return () => clearTimeout(timeoutId);
    }, [initialState]);

    useEffect(() => {
        const regionObj = koreaAdminDistrict.find(region => region.name === selectedRegion);
        setDistricts(regionObj?.districts || []);
    }, [selectedRegion]);

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const title = e.currentTarget.getAttribute("data-title");
        if (title) {
            setTempSelectedRegion(title); // 임시 선택된 지역 상태 업데이트
        }
    };

    const handleSave = () => {
        onSave(tempSelectedRegion);
        onClose();
    }

    const clearFilter = () => {
        setTempSelectedRegion("전체");
    }

    const handleClose = () => {
        setTempSelectedRegion(selectedRegion);
        onClose();
    }

    console.log(selectedRegion !== "전체");
    return (
        <Pop $state={$state} className='bg-white'>
            <Wrap>
                <PopHeader className='d-flex align-items-center justify-content-center border-bottom'>
                    <BtnClose><button onClick={handleClose}><span className="material-symbols-rounded">close</span></button></BtnClose>
                    <div className='fw-bold'>상세검색</div>
                </PopHeader>
                <PopBody className='py-3'>
                    {
                        selectedRegion === "전체" && "" ? null : (
                            <div className='d-flex align-items-center gap-2'>
                                <div
                                    className='text-center px-3 py-1 fs-6 rounded-pill bg-primary text-white d-flex align-items-center text-nowrap'
                                    onClick={clearFilter}
                                >
                                    {tempSelectedRegion}
                                    <span className='ms-1'>×</span>
                                </div>
                            </div>
                        )
                    }
                    <div className='py-2'>
                        <div className='d-flex align-items-center py-2 fw-bold'>지역을 선택해주세요.</div>
                        <div className='d-grid-5 gap-2 pt-2 pb-3'>
                            {
                                koreaAdminDistrict.map((r, i) => (
                                    <Region
                                        className='text-center p-1 fs-6 w-100 rounded-pill'
                                        data-title={r.name}
                                        key={"region"+i}
                                        onClick={handleSelect}
                                        $isSelected={tempSelectedRegion === r.name}
                                    >
                                            {r.name}
                                    </Region>
                                ))
                            }
                        </div>
                    </div>
                    {
                        selectedRegion !== "전체" && tempSelectedRegion !== "전체" ? (
                            <div className='border-top py-2'>
                                <div className='d-flex align-items-center py-2 fw-bold'>상세 지역을 선택해주세요.</div>
                                <div className='d-flex flex-wrap pt-2 pb-3 gap-2'>
                                    {
                                        districts.map((d, i) => (
                                            <District
                                                className='text-center py-1 px-2 fs-6 rounded-pill'
                                                data-title={d}
                                                key={"district"+i}
                                            >
                                                {d}
                                            </District>
                                        ))
                                    }
                                </div>
                            </div>
                        ) : null
                    }
                </PopBody>
            </Wrap>
            <PopSubmit className='bg-white shadow border-top pt-3 pb-4'>
                <Wrap>
                    <BtnWide className='black fw-bold' onClick={handleSave}>확인</BtnWide>
                </Wrap>
            </PopSubmit>
        </Pop>
    );
}

export default FilterPop;
