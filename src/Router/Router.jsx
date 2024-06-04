import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Component/Profile";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import WorkerTaskList from "../Pages/Worker/WorkerTaskList";
import WorkerSubmission from "../Pages/Worker/WorkerSubmission";
import WorkerWithdrawals from "../Pages/Worker/WorkerWithdrawals";
import DashboardHome from "../Pages/DashboardHome";

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
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                element: <DashboardHome></DashboardHome>
            },
            
            {
                path:'/dashboard/task-list',
                element: <WorkerTaskList></WorkerTaskList>
            },
            {
                path:'/dashboard/my-submission',
                element: <WorkerSubmission></WorkerSubmission>
            },
            {
                path:'/dashboard/withdrawals',
                element: <WorkerWithdrawals></WorkerWithdrawals>
            },
        ]
    }
    
]);
