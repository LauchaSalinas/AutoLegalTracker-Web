import React from 'react'
import Sidebar from '../../components/Dashboard/Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex flex-row w-full h-screen bg-[#e7eef7]'>
      <Sidebar />
      <div className='w-screen h-screen flex flex-col justify-evenly items-center'>
        <div className='flex flex-row w-full h-2/5 justify-evenly items-center'>
          {children[0]} {/* This is where the first child will be rendered */}
        </div>
        <div className='w-full h-full flex flex-col items-center'>
          {children[1]}
        </div>
      </div>
    </div>  
  )
}

export default Layout