import styled from "styled-components";
import { Section, Wrap } from "../global/layout";
import Star from "../global/ratings/star";
import Heart from "../global/ratings/heart";
import { useEffect, useState } from "react";
import { fetchData } from "../../modules/firestore_modules/fbFetchStores";

const Skeleton = styled.div`
    
`;

const SkeletonAnim = styled.div`
    &{
        background: linear-gradient(45deg, rgba(225,255,255,0), rgba(225,225,225,1), rgba(225,225,225,0));
        animation: loading 1s infinite;
        background-position-x: -100%;
        background-size: 200%;
    }
    @keyframes loading {
        0%{background-position-x: -100%;}
        100%{background-position-x: 100%;}
    }
`;

const Badge = styled.div`
    width: max-content;
    padding: 0.125rem 0.375rem;
`;

interface Store {
    id: string;
    name?: string;
    address?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    storeName?: string;
    category1? : string;
    category2? : string;
    category3? : string;
}

export default function StoreLists(props: any) {
    const [stores, setStores] = useState<Store[]>([]);;

    useEffect(() => {
        const getStores = async () => {
            const data = await fetchData(props.data.add1);
            setStores(data);
        };

        getStores();
    }, [props.data]);
    return (
        <Section>
            <Wrap className="d-flex flex-column gap-3">
                {
                    stores.length ? (
                        stores.map((list, i) => {
                            return (
                                <div className="d-grid-3 gap-2" key={list.id+i}>
                                    <div className="rounded overflow-hidden">
                                        <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Fskeleton-thumb.jpg?alt=media&token=8ce11deb-e969-48b7-8f86-09f13b23f8ee" alt="" />
                                    </div>
                                    <div className="colspan-2-4 py-2 d-flex flex-column justify-content-between">
                                        <div className="d-flex gap-1">
                                            <div className="fw-bold w-100">{list.storeName}</div>
                                            <div className="">
                                                <Heart></Heart>
                                            </div>
                                        </div>
                                        <div className="fs-8 text-gray-700">{`${list.address1} ${list.address2} ${list.address3}`}</div>
                                        <div className="d-flex align-items-center fs-7 fw-bold mt-auto">
                                            <Star theme="primary-fill"></Star>
                                            <div>0.0</div>
                                            <div className="ms-2 text-gray-700 fw-normal">0개의 평가</div>
                                        </div>
                                        <div className="d-flex gap-1 mt-1">
                                            {list.category1 ? <Badge className="rounded bg-gray-100 fs-7 text-gray-800 fw-bold">{list.category1}</Badge> : null}
                                            {list.category2 ? <Badge className="rounded bg-gray-100 fs-7 text-gray-800 fw-bold">{list.category2}</Badge> : null}
                                            {list.category3 ? <Badge className="rounded bg-gray-100 fs-7 text-gray-800 fw-bold">{list.category3}</Badge> : null}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        [...Array(15)].map((_, index) => (
                            <Skeleton className="d-grid-3 gap-2" key={`skel${index+1}`}>
                                <div className="rounded overflow-hidden">
                                    <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Fskeleton-thumb.jpg?alt=media&token=8ce11deb-e969-48b7-8f86-09f13b23f8ee" alt="" />
                                </div>
                                <div className="colspan-2-4 py-2 d-flex flex-column justify-content-between">
                                    <div className="d-flex gap-1">
                                        <SkeletonAnim className="fw-bold w-50 bg-gray-100 rounded-1 mb-1">&nbsp;</SkeletonAnim>
                                        <div className="ms-auto">
                                            <Heart></Heart>
                                        </div>
                                    </div>
                                    <SkeletonAnim className="fs-8 text-gray-700 w-75 bg-gray-100 rounded-1">&nbsp;</SkeletonAnim>
                                    <div className="d-flex align-items-center fs-7 fw-bold mt-auto">
                                        <SkeletonAnim className="bg-gray-100 rounded-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SkeletonAnim>
                                    </div>
                                    <div className="d-flex gap-1 mt-1">
                                        <SkeletonAnim className="rounded bg-gray-100 fs-7 text-gray-800 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SkeletonAnim>
                                        <SkeletonAnim className="rounded bg-gray-100 fs-7 text-gray-800 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</SkeletonAnim>
                                    </div>
                                </div>
                            </Skeleton>
                        ))
                    )
                }
                
            </Wrap>
        </Section>
    );
}
