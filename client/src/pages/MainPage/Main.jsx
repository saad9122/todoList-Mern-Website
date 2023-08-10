import React, { useEffect } from 'react'
import { Navbar } from '../../components/common/Navbar'
import { Sidebar } from '../../components/common/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { AsyncLoggedInUser } from '../../redux/actions/userThunkAPI'
import { useDispatch } from 'react-redux'
import { Footer } from '../../components/common/footer/Footer'

export const Main = () => {


  
  return (
    <div className='2xl:container mx-auto z-20 relative'>

       <Navbar/>           
      
      <div>
          <div className='md:flex'>
            
            <Sidebar/>
            <Outlet />
            
        </div>  
      </div>

      
        <Footer/>

    </div>
  )
}
