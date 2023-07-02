import React from 'react'
import { Navbar } from '../../components/common/Navbar'
import { Sidebar } from '../../components/common/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div className='2xl:container mx-auto z-20 relative'>
      <Navbar/> 

      <div className='flex justify-betweenz-20 relative'>
        
          <Sidebar/>
          <Outlet />
          
      </div>

    </div>
  )
}
