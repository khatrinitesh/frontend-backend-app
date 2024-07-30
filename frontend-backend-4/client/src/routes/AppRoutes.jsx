import React from 'react'
import { createBrowserRouter } from 'react-router-dom'


import Home from '../pages/Home'
import About from '../pages/About'
import Main from './../layout/Main';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
        ]
    }
])

export default router