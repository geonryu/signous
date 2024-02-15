import 'swiper/css';
import 'swiper/css/pagination';
import styled from "styled-components";
import { Ellipsis, Section, Wrap } from "../global/layout";
import { BtnRedirectionWide } from '../global/buttons/buttons';

const Thumb = styled.div``;

export default function MainReview() {
    return(
        <Section>
            <Wrap>
                <h3 className='mb-4 fs-5 fw-bold'>
                    <a href="#" className='d-flex justify-content-between'>
                        <div className="">유저들의 실제 후기✨</div>
                        <span className="d-block text-gray-700 fs-5 material-symbols-outlined">arrow_forward_ios</span>
                    </a>
                </h3>
                <div className='d-grid-1 gap-3'>
                    <div className='d-grid-3 gap-3 align-items'>
                        <Thumb className="border-4 overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2FMask%20group.png?alt=media&token=a3bcd01a-c646-4c7d-abe4-79cae80be796" alt="" /></Thumb>
                        <div className="colspan-2-4">
                            <div className="mb-2 fw-bold">업체명을 작성해주세요</div>
                            <Ellipsis className="fs-6 ellipsis-3">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 가나다라 마바 사 아자차카 타파하 누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</Ellipsis>
                        </div>
                    </div>
                    <div className='d-grid-3 gap-3 align-items'>
                        <Thumb className="border-4 overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2FMask%20group.png?alt=media&token=a3bcd01a-c646-4c7d-abe4-79cae80be796" alt="" /></Thumb>
                        <div className="colspan-2-4">
                            <div className="ㅁ-2 fw-bold">업체명을 작성해주세요</div>
                            <Ellipsis className="fs-6 ellipsis-3">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 가나다라 마바 사 아자차카 타파하 누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</Ellipsis>
                        </div>
                    </div>
                    <div className='d-grid-3 gap-3 align-items'>
                        <Thumb className="border-4 overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2FMask%20group.png?alt=media&token=a3bcd01a-c646-4c7d-abe4-79cae80be796" alt="" /></Thumb>
                        <div className="colspan-2-4">
                            <div className="mb-2 fw-bold">업체명을 작성해주세요</div>
                            <Ellipsis className="fs-6 ellipsis-3">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 가나다라 마바 사 아자차카 타파하 누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</Ellipsis>
                        </div>
                    </div>
                    <div className='d-grid-3 gap-3 align-items'>
                        <Thumb className="border-4 overflow-hidden"><img src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2FMask%20group.png?alt=media&token=a3bcd01a-c646-4c7d-abe4-79cae80be796" alt="" /></Thumb>
                        <div className="colspan-2-4">
                            <div className="mb-2 fw-bold">업체명을 작성해주세요</div>
                            <Ellipsis className="fs-6 ellipsis-3">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 가나다라 마바 사 아자차카 타파하 누구보다 빠르게 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네</Ellipsis>
                        </div>
                    </div>
                </div>
                <BtnRedirectionWide className='border-gray mt-3'>시공업체 찾기</BtnRedirectionWide>
            </Wrap>
        </Section>
    )
}