import { useContext, useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
// import { RiFileEditFill } from "react-icons/ri";
// import { GoChecklist } from "react-icons/go";
// import { GiTakeMyMoney } from "react-icons/gi";
// import { FaTasks } from "react-icons/fa";
// import { FaUsersCog } from "react-icons/fa";
// import { FaSackDollar } from "react-icons/fa6";
// import { MdOutlineWorkHistory } from "react-icons/md";
// import { MdAddTask } from "react-icons/md";
// import { BiTask } from "react-icons/bi";
import microEarn from '../../assets/icons/earning.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useRole from '../../hooks/useRole'
// import MenuItem from './Menu/MenuItem'
import AdminMenu from './Menu/AdminMenu'
import WorkerMenu from './Menu/WorkerMenu'
import TaskCreator from './Menu/TaskCreator'
import Loading from '../Loading'
import { AuthContext } from '../../Providers/AuthProvider'

const Sidebar = () => {
    const [isActive, setActive] = useState(true)
    const{logOut} = useContext(AuthContext)

    const [role, isLoading] = useRole()
    if (isLoading) {
        return<Loading></Loading>
    }
    // console.log(role);

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block  cursor-pointer p-4  font-bold'>
                        <Link className='flex items-center gap-1' to='/'>
                            
                            <img
                                // className='hidden md:block'
                                src={microEarn}
                                alt='logo'
                                width='24'
                                height='24'
                            />
                            Micro Earn
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <Link to={'/'} className='w-full border-b-2 border-l-4 border-rose-500 hidden md:flex font-medium px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-50 mx-auto'>
                            <div className='flex items-center gap-1' >
                                <img
                                    className='hidden md:block'
                                    src={microEarn}
                                    alt='logo'
                                    width='24'
                                    height='24'
                                    
                                />
                                Micro Earn
                            </div>
                        </Link>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}

                        {/*  Menu Items */}
                        <nav>
                            <NavLink
                                to='/dashboard'
                                end
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  border-l-2 border-black text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <BsFillHouseAddFill className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Home</span>
                            </NavLink>

                            {
                              role==='Worker' && <WorkerMenu></WorkerMenu>
                            }

                            

                            {/* for task creator */}

                            
                            {
                                role ==='Task Creator' && <TaskCreator></TaskCreator>
                            }
                            
                           

                            {/* for admin */}
                            {
                                role === 'admin' && <AdminMenu></AdminMenu>
                            }



                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    {/* Profile Menu */}
                    <NavLink
                        to='/user-profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink>
                    <button
                        onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar