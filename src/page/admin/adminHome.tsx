import { Outlet } from "react-router-dom";
import { Wrapper } from "../../components/global/layout";
import AdminNav from "../../components/admin/adminNav";


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