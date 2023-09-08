import React from 'react'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/LandingPage/Footer'

const Layout = ({ children }) => {
    return (
        <div className='h-screen'>
        <Header />
            {children}
        <Footer />
        </div>
    )
}

export default Layout