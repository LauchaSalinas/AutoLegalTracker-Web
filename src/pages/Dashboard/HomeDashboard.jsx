import React from 'react'
import Notification from '../../components/Dashboard/Notification'
import Layout from './../Dashboard/DashboardLayout'
import Accordion from '../../components/Dashboard/Accordion'

const Dashboard = () => {
  return (
    <Layout>
      <Notification />
      <Accordion />
    </Layout>
  )
}

export default Dashboard