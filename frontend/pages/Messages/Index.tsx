import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import AppLayout from '../../AppLayout/AppLayout'
import Task from '../../components/Content/Tasks/Index'



const Index: NextPage = () => {
  return (
    <React.Fragment>
       <AppLayout>
          <Task/> 
       </AppLayout>  
    </React.Fragment>
  )
}

export default Index;