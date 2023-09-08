import React from 'react'
import Login from './Login'

const Header = () => {
  return (
    <header className='h-[10%] text-white bg-[#0a305c]'>
      <nav className='h-full flex justify-between items-center p-10'>
        <ul className='w-[70%] h-full flex justify-between items-center'>
          <li><a className='font-bold text-xl opacity-100' href="#">AUTO LEGAL TRACKER</a></li>
          <li className='p-2 text-base opacity-75 hover:opacity-100 hover:border-white border-transparent ease-in delay-50'><a href="#">Planes</a></li>
          <li className='p-2 text-base opacity-75 hover:opacity-100 ease-in delay-50'><a href="#">Soluciones</a></li>
          <li className='p-2 text-base opacity-75 hover:opacity-100 ease-in delay-50'><a href="#">Nosotros</a></li>
          <li className='p-2 text-base opacity-75 hover:opacity-100 ease-in delay-50'><a href="#">Soporte</a></li>
        </ul> 
        <div>
          <Login />
        </div>
      </nav>
    </header>
  )
}

export default Header