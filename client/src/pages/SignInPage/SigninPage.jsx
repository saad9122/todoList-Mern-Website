import React, { useState } from 'react'
import './signin.css'
import { SigninForm } from '../../components/signinpage/SigninForm'
import { SignupForm } from '../../components/signinpage/SignupForm'
import {useSelector } from 'react-redux'
import { selectUser } from '../../redux/reducers/userSlice'
import { Loading } from "../../components/loading/Loading"
import { Footer } from '../../components/common/footer/Footer'

export const SigninPage = () => {

  const [showSignupForm,setShowSignupForm] = useState(false)

  const user = useSelector(selectUser)
 



  const toggleSignup = () => {

    setShowSignupForm(!showSignupForm)  
  }
    
  return (
    <>
    {user.isLoading ?  <Loading/> :
      <div className='sign-in bg-gray-100 pt-0 lg:pt-24 pb-36 z-10'>

          <div className='sm:container mx-auto flex flex-col lg:flex-row justify-around justify-items-center 
          space-x-3 space-y-8'>
                      {/* Left Side */}

              <div className='basis-1/2 lg:pl-24 text-center lg:text-start space-y-4 lg:space-y-0
              pt-0 lg:pt-12'>

                  <p className='text-6xl text-blue-600 py-2 pt-12'>Todo List</p>
                  <p className='text-3xl'>Task Managment Made Easy</p>
              </div>

                      {/* Right Side */}
              <div className='basis-1/2 px-4'>

                  <SigninForm toggleSignup = {toggleSignup}  user = {user}/>
              </div>


          </div>

        {showSignupForm && <SignupForm toggleSignup = {toggleSignup} /> }

      </div>

}

       <div className='fixed bottom-0 w-full'>

         <Footer />
        
      </div>  
      
    </>
  )
}
