import React from 'react'
import { Routes, Route } from 'react-router-dom'
//importing components
import Cases from '../pages/Dashboard/Cases'
import Dashboard from '../pages/Dashboard/HomeDashboard'
import Home from '../pages/Landing/Home'
import Plans from '../pages/Landing/Plans'
import AboutUs from '../pages/Landing/AboutUs'

const RoutesConfig = () => {
  return (
    <>
    {/* Routes */}
    <Routes>
        {/* Landing Paths */}
        <Route className='transition ease-in-out delay-50 hover:text-white' 
            path='/' 
            element={<Home/>}
        />
        <Route className='transition ease-in-out delay-50 hover:text-white' 
            path='/planes' 
            element={<Plans/>}
        />
        <Route className='transition ease-in-out delay-50 hover:text-white' 
            path='/nosotros' 
            element={<AboutUs/>}
        />

        {/* Dashboard Paths */}
        <Route 
            className='transition ease-in-out delay-50 hover:text-white' 
            path='/dashboard' 
            element={<Dashboard/>}
        />
        <Route 
            className='transition ease-in-out delay-50 hover:text-white' 
            path='/dashboard/casos' 
            element={<Cases/>}
        />
    </Routes>
  </>
  )
}

export default RoutesConfig