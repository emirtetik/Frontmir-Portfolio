import Layout from '@/layout/Layout'
import React from 'react'
import Partic from "./particles/partic" 
import Meta from '@/components/Meta'
function Art() {
  return (
    <Layout>
        <Meta 
      title={"Sanat"}
      description={"tsParticles"}
      keywords={"tsParticles,design,art"}
      />
    <div className='art'>
   
    
      <Partic />
    </div>
    </Layout>
  )
}

export default Art