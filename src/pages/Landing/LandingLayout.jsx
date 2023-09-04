import React from 'react'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/LandingPage/Footer'

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Layout