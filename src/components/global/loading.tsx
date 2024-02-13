import styled from "styled-components";

export default function Loading() {
    const Loader = styled.div`
        position: fixed;
        top: 0; 
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,.65);
        z-index: 999999;

        & > span{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: block;
            margin:15px auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #ffdacc;
            box-shadow: -14px 0 #ffdacc, 14px 0 #ffdacc;
            box-sizing: border-box;
            animation: shadowPulse 1.2s linear infinite;
        }
        
        @keyframes shadowPulse {
            33% {
                background: #ffdacc;
                box-shadow: -14px 0 #FF3D00, 14px 0 #ffdacc;
            }
            66% {
                background: #FF3D00;
                box-shadow: -14px 0 #ffdacc, 14px 0 #ffdacc;
            }
            100% {
                background: #ffdacc;
                box-shadow: -14px 0 #ffdacc, 14px 0 #FF3D00;
            }
        }
    `;

    return (
        <Loader><span></span></Loader>
    );
}
