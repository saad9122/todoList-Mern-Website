import React, { useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { asyncLoginUser } from '../../redux/actions/userThunkAPI'
import { Error } from './Error'


export const SigninForm = ({toggleSignup,user}) => {


  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")
  const [showError,setShowError] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")

  const dispatch = useDispatch() 

  const mailInputRef = useRef()
  const passwordInputRef = useRef()

  const handleError = (message) => {

    setErrorMessage(message)
    setShowError(true)

    setTimeout(()=> {
        setShowError(false)
    },2000)
}

  const handleLogin =  () => {  


        if(mail==="" ) {
          handleError("Enter your Email Address")
          mailInputRef.current.focus()
        } else if( password === "") {
          handleError("Enter your password")
          passwordInputRef.current.focus()
        } else {

        const enteredData = {mail,password}

        dispatch(asyncLoginUser(enteredData))

        }

  }

  return (
    <> 
    
      <div className='flex justify-center'>
        

          <div className='text-2xl space-y-2 text-center p-4 bg-white rounded-md shadow-md shadow-gray-400 pb-8
          w-[400px]
          '>
            
            <form className='space-y-2'>
                <div>
                  <input type="e-mail" 
                  className="text-base w-full sign-in-input hover:ring-blue-600"
                  placeholder='Phone number or email address' value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  ref={mailInputRef}
                  />

                </div>

                <div className='mt-2'>

                    <input type="password" name="" id="" 
                    placeholder='Enter Password'
                    className="text-base w-full sign-in-input"   value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    ref={passwordInputRef}
                    />
                </div>
              </form>


              <button className='bg-blue-600 w-full h-12 rounded-md text-white'
              onClick={handleLogin}
              >Log in</button>
              <p className='text-sm text-purple-600'>Forgotten Password?</p>
              <hr />

              <button className='bg-green-600 w-full h-12 rounded-md text-white text-lg' 
              onClick={toggleSignup}
              >Create New Account</button>
              {showError && <Error errorMessage={errorMessage}/>}

              
          </div>
      </div>
    </>
  )
}
