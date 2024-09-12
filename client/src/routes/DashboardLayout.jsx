import { Outlet } from "react-router-dom";
import { DashboardHeader, DashboardNavbar } from "../components";

const DashboardLayout = () => {
    return (
        <>  
            <DashboardHeader/>
            <div className="flex">
                <DashboardNavbar/>
                <Outlet/>
            </div>
        </>
    )
}

export default DashboardLayout;