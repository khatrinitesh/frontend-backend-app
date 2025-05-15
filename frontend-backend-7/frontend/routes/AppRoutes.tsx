import React from 'react';
import MainLayout from './../src/layout/MainLayout';
import Home from './../src/pages/Home';
import About from './../src/pages/About';
import Service from './../src/pages/Service';
import Contact from './../src/pages/Contact';
import { createBrowserRouter } from 'react-router-dom';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"service",
                element:<Service/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
        ]
    }
])

export default AppRoutes;
