import React from 'react'
import { Routes, Route } from 'react-router-dom'
//importing components
import Cases from '../pages/Cases'
import Dashboard from '../pages/Dashboard'

const RoutesConfig = () => {
  return (
    <>
    {/* Routes */}
    <Routes>
        {/* Dashboard Path */}
        <Route 
            className='transition ease-in-out delay-50 hover:text-white' 
            path='/' 
            element={<Dashboard/>}
        />
        {/* Cases Path */}
        <Route 
            className='transition ease-in-out delay-50 hover:text-white' 
            path='/casos' 
            element={<Cases/>}
        />
    </Routes>
  </>
  )
}

export default RoutesConfig