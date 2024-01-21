import { Outlet } from "react-router-dom";
import { Wrapper } from "../../global/layout";
import AdminNav from "./adminNav";


export default function AdminHome() {
    return (
        <Wrapper className="d-flex">
            <AdminNav />
            <div className="w-100">
                <Outlet />
            </div>
        </Wrapper>
    );
}