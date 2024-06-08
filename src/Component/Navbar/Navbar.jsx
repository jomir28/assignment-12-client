import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import coin from '../../assets/icons/icons8-coin-60.png'
import Loading from "../Loading";
import useUser from "../../hooks/useUser";


const Navbar = () => {
    const { logOut, user, loading } = useContext(AuthContext)
    const[data] = useUser()
    if (loading) {
        return <Loading></Loading>
    }

    const handleLogout = async() => {
        await logOut()
    }

    return (
        <div className="bg-gray-100">
            <div className="navbar bg-gray-100 container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                !user && <>
                                    <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'text-sm hover:text-rose-500 '} to={'/login'}>Login</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'text-sm hover:text-rose-500 '} to={'/register'}>Register</NavLink>
                                    
                                        <a
                                            className="text-[#000000DE] "
                                            href="https://youtu.be/8zy3GpMijKs?si=gGyIaEy-MA6S2DUB"
                                            target="_blank"
                                        >
                                            Watch Demo
                                        </a>
                                  
                                </>
                            }
                            
                            {
                                user && <div className="flex gap-3 items-center">
                                    <NavLink className={({ isActive }) => isActive ? 'border-2  font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5 border2 rounded-xl hover:bg-cyan-100 hover:text-blue-500 border-2 '} to={'/dashboard'}>Dashboard</NavLink>

                                    <div className="dropdown dropdown-end z-50">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <img className="w-8 h-8" src={coin} alt="" />
                                                <span className="badge badge-sm border-pink-600 indicator-item">{data?.coins}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">MicroEarn</Link>
                </div>
                <div className="navbar-center  hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {
                            !user && <>
                                <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5 border-2 rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/login'}>Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5 border-2 rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/register'}>Register</NavLink>
                                
                                <button>
                                    <a
                                        className="py-3 px-5 border-2 rounded-xl hover:bg-cyan-100 hover:text-blue-500"
                                        href="https://youtu.be/8zy3GpMijKs?si=gGyIaEy-MA6S2DUB"
                                        target="_blank"
                                    >
                                        Watch Demo
                                    </a>
                                </button>
                                {
                            user && <div className="flex gap-3 items-center">
                                <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/dashboard'}>Dashboard</NavLink>

                                <div className="dropdown dropdown-end z-50">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <img className="w-8 h-8" src={coin} alt="" />
                                            <span className="badge badge-sm indicator-item">{data?.coins}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                            </>
                        }

                        {
                            user && <div className="flex gap-3 items-center">
                                <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5 ' : 'py-3 px-5 border-2 rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/dashboard'}>Dashboard</NavLink>

                                <div className="dropdown dropdown-end z-50">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <img className="w-8 h-8" src={coin} alt="" />
                                            <span className="badge border border-pink-600 badge-sm indicator-item">{data?.coins}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                        
                    </ul>
                </div>
                {
                    user && <div className="navbar-end">
                        <div className="dropdown z-50 dropdown-end ">
                            <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" referrerPolicy='no-referrer' src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={'/user-profile'} className="justify-between">
                                        User Profile
                                    </Link>
                                </li>
                                <li> <a onClick={handleLogout} >Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    
                }
                
            </div>
        </div>
    );
};

export default Navbar;