import { BtnRedirectionDefault } from "../../components/global/buttons/buttons";
import {  Wrap } from "../../components/global/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import styled from "styled-components";

const Slider = styled.div`
    & .swiper-pagination{
        position: unset;
        margin: 1rem auto 0;
        transform: unset !important;
    }

    & .swiper-pagination .swiper-pagination-bullet-active{
        background-color: #ff4600;
    }
`;
const Intro = styled.div`
    height: 360px;
`;

export default function PartnersHome() {
    return(
        <Wrap>
            <Intro className="py-5 px-3 bg-bg200 rounded-4 d-flex flex-column justify-content-center">
                <h2 className="fw-bold text-center">사이너스에서<br/><span className="text-primary">우리지역의 고객</span>을 만나보세요!</h2>
                <div className="d-flex justify-content-center gap-2 mt-3">
                    <BtnRedirectionDefault className="primary fw-bold" href="/partnersLogin">로그인</BtnRedirectionDefault>
                    <BtnRedirectionDefault className="black fw-bold" href="/partnersJoin">지금 가입 신청하기</BtnRedirectionDefault>
                </div>
            </Intro>
            <div className="py-3">
                <Slider className="">
                    <Swiper
                        loop={true}
                        slidesPerView={1.5}
                        modules={[ Autoplay, Pagination]}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        className="brake"
                        speed={1000}
                        spaceBetween={20}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            992: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        <SwiperSlide className="border border-bg400 rounded-2 p-3 border">
                            <div className="mb-2 fw-bold text-primary">지역기반</div>
                            <div className="fs-6">내 지역을 기반으로 가까운 고객들이 찾아옵니다.</div>
                        </SwiperSlide>
                        <SwiperSlide className="border border-bg400 rounded-2 p-3 border">
                            <div className="mb-2 fw-bold text-primary">포트폴리오 관리</div>
                            <div className="fs-6">그동안 관리하기 힘들었던 포트폴리오도 손쉽게 해결하세요.</div>
                        </SwiperSlide>
                        <SwiperSlide className="border border-bg400 rounded-2 p-3 border">
                            <div className="mb-2 fw-bold text-primary">고객관리</div>
                            <div className="fs-6">고객관리와 사후 대응까지 도와드립니다.</div>
                        </SwiperSlide>
                    </Swiper>
                </Slider>
            </div>
        </Wrap>
    )
}