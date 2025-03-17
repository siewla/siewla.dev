import React from 'react'
import Layout from '@/components/Layout';


const page = () => {
  return (
    <Layout>
      <h1 className='heading'>Posts</h1>
      <ul>
        <h3 className='post-year'>2025</h3>
        <li>
          <span className='post-title'>Abc</span>
          <span className='post-date'>March 17, 2025</span>
        </li>
      </ul>
    </Layout>
  )
}

export default page