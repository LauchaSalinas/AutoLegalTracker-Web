import React from 'react'
import Notification from '../components/Notification'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'

const Dashboard = () => {
  return (
    <Layout>
      <Notification />
      <Accordion />
    </Layout>
  )
}

export default Dashboard