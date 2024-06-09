import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://b9-a12-server-swart.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;