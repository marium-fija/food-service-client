import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../layouts/HomeLayouts';
import Home from '../components/Home';
import AuthLayout from '../layouts/AuthLayout';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import AllServices from '../pages/AllServices';
import AddService from '../pages/AddService';
import ServiceDetails from '../pages/ServiceDetails';
import ErrorPage from '../pages/ErrorPage';
import MyServices from '../pages/MyServices';
import MyReviews from '../pages/MyReviews';
import PrivateRoute from '../provider/PrivateRoute'

const route = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [

            {
                path: "",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/services",
        element: <AllServices></AllServices>
    },
    {
        path: "/addServices",
        element: 
        <PrivateRoute>
            <AddService></AddService>
        </PrivateRoute>   
    },
    {
        path: "/services/:id",
        element: <PrivateRoute>
            <ServiceDetails></ServiceDetails>
        </PrivateRoute>
    },
    {
        path: "/myServices",
        element: <PrivateRoute>
            <MyServices></MyServices>
        </PrivateRoute>
    },
    {
        path: "/my-reviews",
        element: <PrivateRoute>
            <MyReviews></MyReviews>
        </PrivateRoute>
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },

    
])

export default route;