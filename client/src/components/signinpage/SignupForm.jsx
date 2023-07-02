import React, { useState } from 'react'
import { Dob } from './Dob'
import { GenderRadio } from './GenderRadio'
import ClearIcon from '@mui/icons-material/Clear';


export const SignupForm = ({toggleSignup}) => {

    const [selectedDate,setSelectedDate]   = useState('')
    const [selectedMonth,setSelectedMonth] = useState('')
    const [selectedYear, setSelectedYear]  = useState('')
    const [selectedGender,setSelectedGender] = useState('')


    const onDateChange = (e) => {
        setSelectedDate(e.target.value)
    }
    const onYearChange = (e) => {
        setSelectedYear(e.target.value)

    }
    const onMonthChange = (e) => {
        setSelectedMonth(e.target.value)

    }

    const handleGender = (value) => {
        setSelectedGender(value)
        console.log(value)
    }

    const handleSignup = () => {
        console.log(selectedDate)
        console.log(selectedMonth)
        console.log(selectedYear)
    }


  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-gray-100 bg-opacity-60 z-20 flex justify-center items-center
    '>
        <div className='absolute z-30 bg-white w-[450px] pb-4'>
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
                
                <div className='flex space-x-2'>
                    <input type="text" placeholder='First Name'  className='sign-up-input'/>
                    <input type="text" placeholder='Second Name' className='sign-up-input'/>
                </div>
                <div>
                    <input type="mail" placeholder='Enter mobile of email address' className='sign-up-input' />
                </div>
                <div>
                    <input type="password" placeholder='New password' className='sign-up-input' />
                </div>
                <div>
                    <input type="password" placeholder='confirm password' className='sign-up-input' />
                </div>
                
                <section>

                    <Dob onDateChange={onDateChange} onMonthChange={onMonthChange} onYearChange={onYearChange}/>

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
