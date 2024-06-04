import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";
import Footer from "../Component/Navbar/Footer";
import { IoNotifications } from "react-icons/io5";

const DashboardLayout = () => {
    return (
        <div className="md:flex">

            <div>
                <Sidebar></Sidebar>
            </div>

            <div className="flex-1 md:ml-[280px] md:pt-4">

                <div className="h-20 border flex gap-10 pr-5 items-center justify-end">
                    <div>
                        <div className="flex gap-2">
                            <p>Available Coin</p>
                            <p>User Image</p>
                        </div>
                        <div className="flex gap-2">
                            <p>User Role</p>
                            <p>User Name</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <IoNotifications className="text-2xl" />
                        Notification
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;