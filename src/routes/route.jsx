import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
import About from '../pages/About';
import ForeignersGuide from '../pages/ForeignersGuide';
import AmbassadorApply from '../pages/AmbassadorApply';

const route = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [

            {
                path: "",
                element: <Home></Home>
            },
            {
        path: "/services",
        element: <AllServices></AllServices>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/addServices",
        element: 
        <PrivateRoute>
            <AddService></AddService>
        </PrivateRoute>   
    },
    {
        path: "/foreignersGuide",
        element: 
        <PrivateRoute>
            <ForeignersGuide></ForeignersGuide>
        </PrivateRoute>   
    },
    {
        path: "/ambassador-apply",
        element: 
        <PrivateRoute>
            <AmbassadorApply></AmbassadorApply>
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
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "login",
                element: <LogIn></LogIn>,
            },
            {
                path: "register",
                element: <Register></Register>
            },
        ]
    },
    
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    },

    
])

export default route;