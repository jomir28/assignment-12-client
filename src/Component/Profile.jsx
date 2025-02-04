import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { RiCoinsFill } from "react-icons/ri"
import useRole from "../hooks/useRole"
import { Link } from "react-router-dom"
import useUser from "../hooks/useUser"


const Profile = () => {
    const { user } = useContext(AuthContext)
    const [role] = useRole()
    const[data]=useUser()
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src='https://i.ibb.co/bF9gp1n/images.png'
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            referrerPolicy='no-referrer'
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
                        {role}
                    </p>
                    <p className='mt-2 flex gap-2 items-center text-xl font-medium text-gray-800 '>
                        Available Coins: {data?.coins} 

                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>
                                    {user?.email}
                                </span>
                            </p>

                            {/* <div className="mt-5 md:mt-0">
                                <Link className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                    Update Profile
                                </Link>
                                <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                    Change Password
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile