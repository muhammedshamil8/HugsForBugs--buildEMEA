import { createBrowserRouter, Navigate } from "react-router-dom";
import UserLayout from "./components/UserLayout";
import AdminLayout from "./components/AdminLayout";
import AuthLayout from "./components/AuthLayout";
import AdminDashboard from "./view/admin-pages/AdminDashboard";
import AdminLogin from "./view/admin-pages/AdminLogin";
import AdminProfile from "./view/admin-pages/AdminProfile";
import Dashboard from "./view/user-pages/Dashboard";
import Login from "./view/user-pages/Login";
import Home from "./view/user-pages/Home";
import Profile from "./view/user-pages/Profile";
import NotFound from "./view/NotFound";
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
