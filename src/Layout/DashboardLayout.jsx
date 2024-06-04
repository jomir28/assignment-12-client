import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar/Sidebar";
import Footer from "../Component/Navbar/Footer";
import { IoNotifications } from "react-icons/io5";
import { RiCoinsLine } from "react-icons/ri";
import useUser from "../hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Component/Loading";

const DashboardLayout = () => {
    const {loading} = useContext(AuthContext)
    const [data ] = useUser()
    if (loading) {
        return<Loading></Loading>
    }
    console.log(data);
    return (
        <div className="md:flex">

            <div>
                <Sidebar></Sidebar>
            </div>

            <div className="flex-1 md:ml-64 md:pt-4">

                <div className="h-20 border flex gap-10 pr-5 items-center justify-end">
                    <div>
                        <div className="flex gap-5">
                            <p className="flex items-center gap-1"><span>Coin: {data?.coins} </span><RiCoinsLine className="text-xl text-amber-500"/> </p>
                            <div className="avatar">
                                <div className="w-11 rounded-full">
                                    <img src={data?.image} />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p>{data?.role}</p>
                            <p>{data?.name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <IoNotifications className="text-2xl" />
                        Notification
                    </div>
                </div>
                <div className="min-h-[660px]">
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