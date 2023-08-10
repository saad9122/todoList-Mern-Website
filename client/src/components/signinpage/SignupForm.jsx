import React, { useRef, useState } from 'react'
import { Dob } from './Dob'
import { GenderRadio } from './GenderRadio'
import ClearIcon from '@mui/icons-material/Clear';
import { totalMonths } from '../../data';
import { Error } from './Error';
import { useDispatch } from 'react-redux';
import { AsyncSignupThunk } from '../../redux/actions/userThunkAPI';


export const SignupForm = ({toggleSignup}) => {

    const initialDate = new Date(1990,0,1)
    const intialMonth = initialDate.getMonth()

    const [selectedDate,setSelectedDate]   = useState(initialDate.getDate())
    const [selectedMonth,setSelectedMonth] = useState(totalMonths[intialMonth])
    const [selectedYear, setSelectedYear]  = useState(initialDate.getFullYear())
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [mail,setMail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setconfrimPassword] = useState('')
    const [selectedGender,setSelectedGender] = useState('')

    const [showError,setShowError] = useState(false)
    const [errorMessage,setErrorMessage] = useState(null)


    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const mailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    

    const dispatch = useDispatch()

    const handleGender = (value) => {
        setSelectedGender(value)
    }

    const handleError = (message) => {

        setErrorMessage(message)
        setShowError(true)

        setTimeout(()=> {
            setShowError(false)
        },2000)
    }

    const handleSignup = () => {

        const month = totalMonths.indexOf(selectedMonth)
        const dob =  new Date(selectedYear,month,selectedDate)

        if(firstName === ""){
            handleError("Enter your first name")
            firstNameRef.current.focus();
            
        } else if(lastName === ""){

            handleError("Enter your last name")
            lastNameRef.current.focus();
        }else if(mail === "") {
            handleError("Enter your mail")
            mailRef.current.focus();
        } else if (password === "") {

            handleError("Enter Password")
            passwordRef.current.focus();
        } else if(confirmPassword === "") {
            handleError("Enter your confirm password")
            confirmPasswordRef.current.focus();
        }else if(password !== confirmPassword) {

            handleError("Password is not matched")
            
        }else if(selectedGender === "") {

            handleError("Select Gender")
        }else {

            const newUser = {
                firstName: firstName,
                lastName: lastName,
                mail: mail,
                password:password,
                dob: dob,
                gender: selectedGender
            }
    
            dispatch(AsyncSignupThunk(newUser))

        }
        
        
    }


  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-gray-100 bg-opacity-60 z-20 flex justify-center items-center
    '>
        <div className='absolute z-30 bg-white w-[22rem] sm:w-[27rem] pb-4'>
        <button
        className='absolute right-4 top-2 text-lg'
        onClick={toggleSignup}
        >
            <ClearIcon />

        </button>
            <div className='p-4 space-y-3'>
                <div className='space-y-2 '>
                    <p className='text-4xl'>Sign up</p>
                    <p className='text-gray-500'>Make your own account in few clicks</p>
                </div>
                
                <hr />

                {showError && <Error errorMessage = {errorMessage} /> }
                
                <div className='flex space-x-2'>
                    <input type="text" placeholder='First Name'  className='sign-up-input' value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    ref={firstNameRef}
                    />
                    <input type="text" placeholder='Last Name' className='sign-up-input' value ={lastName}
                    onChange={e => setLastName(e.target.value)}
                    ref={lastNameRef}
                    />
                </div>
                <div>
                    <input type="mail" placeholder='Enter email address' className='sign-up-input' value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    ref={mailRef}
                    
                    />
                </div>
                <div>
                    <input type="password" placeholder='New password' className='sign-up-input' value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={passwordRef}
                    />
                </div>
                <div>
                    <input type="password" placeholder='confirm password' className='sign-up-input' 
                    onChange={(e) => setconfrimPassword(e.target.value)}
                    ref={confirmPasswordRef}
                    />
                </div>
                
                <section>

                    <Dob 
                    selectedDate = {selectedDate} selectedMonth={selectedMonth} selectedYear={selectedYear}
                    onDateChange ={(e) => setSelectedDate(e.target.value)} 
                    onMonthChange={(e) => setSelectedMonth(e.target.value)} 
                    onYearChange ={(e) => setSelectedYear(e.target.value)}/>

                </section>

                <section className='flex space-x-2'>

                    <GenderRadio data = {'Male'} selectedGender={selectedGender}  handleGender={handleGender}/>
                    <GenderRadio data = {'Female'} selectedGender={selectedGender}  handleGender={handleGender}/>
                    <GenderRadio data = {'Other'} selectedGender={selectedGender}  handleGender={handleGender}/>

                </section>

                <div>
                    <p
                    className='text-xs'
                    >By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS 
                        notifications from us and can opt out at any time</p>
                </div>
                
                    <button className='bg-green-600 text-white p-2 w-full text-xl'
                    onClick={handleSignup}
                    >Sign up</button>
                
            </div>
        </div>
    </div>
  )
}
