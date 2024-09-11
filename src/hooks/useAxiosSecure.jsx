import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
    // baseURL: 'https://b9-a12-server-swart.vercel.app'
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    //request interceptor to add authorization header for every secure call to the api
    const { logOut, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();


    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })



    // intercepts 401 and 403 status:
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            navigate('/login')
            await logOut()
            setLoading(false)

        }
        console.log('status error in the interceptors', status);
        return Promise.reject(error)
    })


    return axiosSecure
};

export default useAxiosSecure;