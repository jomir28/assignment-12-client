import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const { logOut,user } = useContext(AuthContext)

    const handleLogout = async() => {
        await logOut()
    }

    return (
        <div>
            <div className="navbar container mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'text-sm hover:text-rose-500 '} to={'/login'}>Login</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'text-sm hover:text-rose-500 '} to={'/register'}>Register</NavLink>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">MicroEarn</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {
                            !user && <>
                                <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/login'}>Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/register'}>Register</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/watch-demo'}>Watch Demo</NavLink>
                            </>
                       }
                        {
                            user && <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/dashboard'}>Dashboard</NavLink>
                        }
                    </ul>
                </div>
                {
                    user && <div className="navbar-end">
                        <a onClick={handleLogout} className="btn">Logout</a>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;