import styled from "styled-components";
import { Wrap } from "./layout";

const Flogo = styled.div`width: 92px;`;

export default function GlobalFooter() {
    return(
        <footer className="py-5 bg-black">
            <Wrap>
                <Flogo>
                    <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/signous-bc70c.appspot.com/o/resources%2Flogo-w.svg?alt=media&token=8b503ecc-ccaa-4d0d-9d68-d03120a8f825" alt="" />
                </Flogo>
                <div className="text-gray-300 mt-3 fs-6">
                    동해물과 백두산이 마르고 닳도록
                </div>
            </Wrap>
        </footer>
    )
}