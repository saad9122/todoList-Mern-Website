import React, { useState } from 'react'
import backgroundImage from '../../data/backgroundImage/notebook.jpg'

import './signin.css'
import { SigninForm } from '../../components/signinpage/SigninForm'
import { SignupForm } from '../../components/signinpage/SignupForm'

export const SigninPage = () => {

  const [showSignupForm,setShowSignupForm] = useState(false)

  const toggleSignup = () => {
    console.log(showSignupForm)
    setShowSignupForm(!showSignupForm)
  }
    
  return (
    <div className='sign-in bg-gray-100 pt-0 lg:pt-24 pb-36 z-10'>

        <div className='sm:container mx-auto flex flex-col lg:flex-row justify-around justify-items-center 
        space-x-3 space-y-8'>
                    {/* Left Side */}

            <div className='basis-1/2 lg:pl-24 text-center lg:text-start space-y-4 lg:space-y-0
            pt-0 lg:pt-12'>

                <p className='text-6xl text-blue-600 py-2 pt-12'>Todo List</p>
                <p className='text-3xl'>Stay punctual and meet your day to day task timely</p>
            </div>

                    {/* Right Side */}
            <div className='basis-1/2 px-4'>

                <SigninForm toggleSignup = {toggleSignup} />
            </div>


        </div>

       {showSignupForm && <SignupForm toggleSignup = {toggleSignup} /> }

    </div>
  )
}
