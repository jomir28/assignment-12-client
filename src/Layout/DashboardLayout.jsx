import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="md:flex">
            
            <div>
                <Sidebar></Sidebar>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default DashboardLayout;