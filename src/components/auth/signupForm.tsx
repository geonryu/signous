import styled from "styled-components";
import { Section, Wrap } from "../global/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";
import InputComps from "../global/form-components/inputComps";
import CheckboxComps from "../global/form-components/checkBox";
import { BtnWide } from "../global/buttons";
import Loading from "../global/loading";

const Form = styled.form`
    & .scrBar .swiper-pagination-progressbar-fill{background-color: #ff4600; border-radius: 500px; display: block; position: unset;}
`;

const Scrollbar = styled.div`
    background-color: #dee2e6; border-radius: 100px; overflow: hidden; position: unset; height: 4px;
    & span{display: block; height: 100%; background-color: #ff4600; transition: width 0.3s;}
`;

const formComponents = {
    email: {type: "text", title: "asdasd", id: "email", name: "email", placeholder: "아아디(이메일) 입력"},
    name: {type: "text", title: "asdasd", id: "name", name: "name", placeholder: "실명 입력"},
    password: {type: "password", title: "asdasd", id: "pw", name: "pw", placeholder: "비밀번호 입력"},
    ckPassword: {type: "password", title: "asdasd", id: "ckPw", name: "ckPw", placeholder: "비밀번호 확인"},
    phoneNum: {type: "tel", title: "asdasd", id: "", name: "test", value: "asd", placeholder: "", maxLength: 13},
    certNum: {type: "num", title: "asdasd", id: "", name: "test", value: "asd", placeholder: "", maxLength: 6},
    checkbox: [
        {htmlFor: "agree1", id: "agree1", value: "true", title: "이용약관(필수)"},
        {htmlFor: "agree2", id: "agree2", value: "true", title: "개인정보수집 및 이용동의(필수)"},
        {htmlFor: "agree3", id: "agree3", value: "true", title: "이벤트, 쿠폰 알림 메일 및 SMS 수신(선택)"},
    ]
}


export default function SignupForm() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const signUpSteps = 4;
    const [step, setStep] = useState(1);
    const [step1, setStep1] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const [step1, setStep1] = useState(false);
    // const [step1, setStep1] = useState(false);
    
    const goToSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    
    
    return (
        <Section>
            {isLoading ? <Loading/> : null}
            <Wrap className="mx-auto col-md-8 col-lg-6">
                <h3 className="mb-4 fw-bold text-center"><span className="fs-6 d-block text-primary">SIGNOUS</span> 회원가입</h3>
                <Form action="">
                    <div className="d-flex flex-wrap fs-5">
                        <Scrollbar className={`w-100`}><span style={{ width: `${step / signUpSteps * 100}%` }} /></Scrollbar>
                        {/* <div className={`${step > 1 ? "text-gray-200" : ""} mt-1 me-1`}><button type="button" className="prevProgress"><span className="d-block fs-5 material-symbols-outlined">arrow_back</span></button></div> */}
                        <div className="fw-bold pt-3 pb-5 me-2">Step {step}.</div>
                        <div className="fw-semibold pt-3 pb-5">
                            {step === 1 ? <div>사이너스 서비스 이용약관에<br/>동의해주세요.</div> : null}
                            {step === 2 ? <div>로그인에 사용할<br/>아이디를 입력해주세요.</div> : null}
                            {step === 3 ? <div>로그인에 사용할<br/>비밀번호를 입력해주세요.</div> : null}
                            {step === 4 ? <div>본인인증을 진행해주세요.</div> : null}
                        </div>
                    </div>
                    <Swiper 
                        ref={swiperRef}
                        modules = {[Navigation]}
                        className = "joinSlider"
                        navigation = {{prevEl: ".prevProgress", nextEl: ""}}
                        onActiveIndexChange={(e)=>{
                            setStep(e.realIndex + 1);

                        }}
                        spaceBetween={16}
                        // allowTouchMove = {false}
                    >
                        <SwiperSlide>
                            <CheckboxComps attr={formComponents.checkbox} setState={setStep1}></CheckboxComps>
                            <BtnWide onClick={goToSlide} className={`black fw-bold mt-5 ${step1 ? "" : "disable"}`} type="button">동의하고 가입 시작하기</BtnWide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <InputComps attr={formComponents.email}></InputComps>
                            gggg
                        </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </Form>
            </Wrap>
        </Section>
    )
}