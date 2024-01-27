import styled from "styled-components";
import { Section, Wrap } from "../global/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";

const Form = styled.form`
    & .scrBar .swiper-pagination-progressbar-fill{background-color: #ff4600; border-radius: 500px; display: block; position: unset;}
`;

const Scrollbar = styled.div`
    background-color: #dee2e6; border-radius: 100px; overflow: hidden; position: unset; height: 4px;
    & span{display: block; height: 100%; background-color: #ff4600; transition: width 0.1s;}
`;


export default function SignupForm() {
    const [step, setStep] = useState(1);
    const signUpSteps = 5;
    
    return (
        <Section>
            <Wrap className="mx-auto col-md-8 col-lg-6">
                <h3 className="mb-4 fw-bold text-center"><span className="fs-6 d-block text-primary">SIGNOUS</span> 회원가입</h3>
                <Form action="">
                    <div className="d-flex flex-wrap">
                        <Scrollbar className={`w-100`}><span style={{ width: `${step / signUpSteps * 100}%` }} /></Scrollbar>
                        {/* <div className={`${step > 1 ? "text-gray-200" : ""} mt-1 me-1`}><button type="button" className="prevProgress"><span className="d-block fs-5 material-symbols-outlined">arrow_back</span></button></div> */}
                        <div className="fw-bold pt-3 pb-5 me-2">Step {step}.</div>
                        <div className="fw-semibold pt-3 pb-5">
                            {step === 1 ? <div>사이너스 서비스 이용약관에<br/>동의해주세요.</div> : null}
                            {step === 2 ? <div>로그인에 사용할<br/>아이디를 입력해주세요.</div> : null}
                            {step === 3 ? <div>로그인에 사용할<br/>비밀번호를 입력해주세요.</div> : null}
                            {step === 4 ? <div>본인인증을 진행해주세요.
안전한 거래를 위해 딱 한번 본인인증을 진행해요.</div> : null}
                            {step === 5 ? <div>가입완료</div> : null}
                        </div>
                    </div>
                    <Swiper 
                        modules = {[Navigation]}
                        className = "joinSlider"
                        navigation = {{prevEl: ".prevProgress", nextEl: ""}}
                        onActiveIndexChange={(e)=>setStep(e.realIndex + 1)}
                        // allowTouchMove = {false}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </Form>
            </Wrap>
        </Section>
    )
}