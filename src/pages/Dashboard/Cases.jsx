import React from 'react'
import Accordion from '../../components/Dashboard/Accordion'
import Layout from './DashboardLayout'
import Breadcrumb from '../../components/Dashboard/Breadcrumb'

const Cases = () => {
  return (
    <Layout>
      <>
        {location.pathname != '/' ? <Breadcrumb /> : null}
      </>
      <div className='w-[95%] min-h-[350px] max-h-[400px] p-5 flex flex-col justify-items-start items-center bg-white rounded-md shadow-md overflow-y-auto'>  
        <div className='self-start pb-10'>
          <h1 className='font-semibold text-xl'>Casos Activos - Pendientes de responder</h1>
        </div>
        <Accordion />
      </div>
    </Layout>
  )
}

export default Cases