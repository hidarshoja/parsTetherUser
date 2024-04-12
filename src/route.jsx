import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";

import Password from "./pages/Password";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/login/page";
import MyBag from "./pages/MyBag";
import Market from "./pages/Market";
import Deposit from "./pages/Deposit";
import Harvest from "./pages/Harvest";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import SellAndBuy from "./pages/SellAndBuy";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/myBag',
                element: <MyBag />
            },
            {
                path: '/market',
                element: <Market />
            },
            {
                path: '/deposit',
                element: <Deposit />
            },
            {
                path: '/harvest',
                element: <Harvest />
            },
            
            {
                path: '/deposit/details',
                element: <Details />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/password',
                element: <Password />
            }
            ,
            {
                path: '/SellAndBuy',
                element: <SellAndBuy />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }


])