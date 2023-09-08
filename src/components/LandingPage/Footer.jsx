import React from 'react'
import linkedinLogo from '../../assets/linkedin.png'
import youtubeLogo from '../../assets/youtube.png'

const Footer = () => {
  return (
    <div className='h-[10%] justify-center flex items-center text-white bg-[#0a305c]'>
      <div className='w-full flex flex-row justify-center items-center gap-2'> 
        <a href="https://www.linkedin.com/in/lautarosalinas/" target='_blank'>
          <img className='w-9 object-contain' src={linkedinLogo} alt="linkedin logo" />
        </a>
        <a href="https://www.youtube.com/" target='_blank'>
          <img className='w-10' src={youtubeLogo} alt="youtube logo" />
        </a>
      </div>
    </div>
  )
}

export default Footer