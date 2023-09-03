//This HomePage provides the basic cases info.
import React from 'react'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation();
  return (   
    <Layout>
      {location.pathname != '/' ? <Breadcrumb /> : null}

    </Layout>
  )
}

export default HomePage
