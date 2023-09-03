import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[250px] h-full flex flex-col justify-center p-5 bg-[#646363]'>
      <div>
          <Link to='/' className='text-2xl font-bold text-white'>AUTO LEGAL TRACKER</Link>             
      </div>
      <div className='flex items-center text-white text-left h-full w-full text-opacity-50'>
        <ul className='flex flex-col text-xl'>
          <Link to="/casos" className='transition ease-in-out delay-50 hover:text-white'>Casos</Link>
          <Link to="#" className='transition ease-in-out delay-50 hover:text-white'>Notificaciones</Link>
          <Link to="#" className='transition ease-in-out delay-50 hover:text-white'>Automatizaciones</Link>
          <Link to="#" className='transition ease-in-out delay-50 hover:text-white'>Usuarios</Link>
          <Link to="#" className='transition ease-in-out delay-50 hover:text-white'>Calendario</Link>  
        </ul>
      </div>
    </div>
  )
}

export default Sidebar