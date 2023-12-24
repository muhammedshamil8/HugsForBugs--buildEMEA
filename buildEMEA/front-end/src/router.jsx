import { createBrowserRouter, Navigate } from "react-router-dom";
import UserLayout from "./components/Layouts/User/UserLayout";
import AdminLayout from "./components/Layouts/Adminn/AdminLayout";
import AuthLayout from "./components/Layouts/Authenticationn/AuthLayout";
import AdminDashboard from "./view/admin-pages/Dashboard/AdminDashboard";
import AdminLogin from "./view/admin-pages/Login/AdminLogin";
import AdminProfile from "./view/admin-pages/Profile/AdminProfile";
import Dashboard from "./view/user-pages/Dashboard/Dashboard";
import Login from "./view/user-pages/Login/Login";
import Home from "./view/Home-page/Home";
import Profile from "./view/user-pages/Profile/Profile";
import NotFound from "./view/NotFound-page/NotFound";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/profile",
                element: <Profile />
            },
        ]
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/adminDashboard" />
            },
            {
                path: "/adminDashboard",
                element: <AdminDashboard /> 
            },
            {
                path: "/adminProfile",
                element: <AdminProfile />
            },
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/adminLogin",
                element: <AdminLogin />
            },
           
        ]
    },
    {
        path: "*",
        element: <NotFound/>
      }
])

export default router;
