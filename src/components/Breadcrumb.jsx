import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import capitalizeFirstLetter from '../utilities/capitalizeFirstLetter';

const Breadcrumb = () => {
    let currentLink = '';
    const crumbs = useLocation().pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <>
                <div className='w-[10%] p-[18px] text-[18px] flex gap-10 bg-white'>
                    <Link 
                        to={currentLink}
                        className=''
                    >{capitalizeFirstLetter(crumb)} </Link>
                </div>
                <div className='bg-white p-[18px] text-[18px] font-semibold'>
                    {/* > simbol */}
                    <span> {'>'} </span>
                </div>
                </>
            )
        });
    
    return (
        <div className='w-full h-1/3 flex flex-row self-start place-self-start items-center drop-shadow-md'>
            {crumbs}
        </div>
    )
}

export default Breadcrumb