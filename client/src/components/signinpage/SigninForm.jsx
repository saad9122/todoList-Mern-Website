import React from 'react'

export const SigninForm = ({toggleSignup}) => {

  return (
    <div className='flex justify-center'>
        <div className='text-2xl text-center space-y-4 p-4 bg-white rounded-md shadow-md shadow-gray-400 pb-8
        w-[400px]
        '>
            <div>

              <input type="e-mail" 
              className="text-base w-full sign-in-input hover:ring-blue-600"
              placeholder='Phone number or email address'
              />

            </div>

            <div className='mt-2'>

                 <input type="password" name="" id="" 
                 placeholder='Enter Password'
                 className="text-base w-full sign-in-input"    
                 />

            </div>
            <button className='bg-blue-600 w-full h-12 rounded-md text-white'>Log in</button>
            <p className='text-sm text-purple-600'>Forgotten Password?</p>
            <hr />
            <button className='bg-green-600 w-full h-12 rounded-md text-white text-lg'
            onClick={toggleSignup}
            >Create New Account</button>

        </div>
    </div>
  )
}
