import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Component/Profile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
        ]
    },
    
]);
