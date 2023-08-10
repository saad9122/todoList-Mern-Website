import React from 'react'
import { Dropdown } from '../common/Dropdown'
import { totalHours, totalMinutes, totalMeridiem } from '../../data'

export const DueTime = ({handleHours,handleMinutes,handleMeridiem,currentHours,currentMinutes,currentMeridiem}) => {
  return (
    <>
    <div className='flex justify-between items-center space-x-0 md:space-x-4'>

<label htmlFor="duedate" className='whitespace-nowrap text-lg w-2/12 hidden md:block'>Due Time:</label>

<div className='w-full md:w-10/12 flex space-x-4'>

<div className='basis-1/3'>

            <Dropdown data = {totalHours} handleChange={handleHours} currentValue = {currentHours}/>

            </div>

            <div className='basis-1/3'>

            <Dropdown data = {totalMinutes} handleChange={handleMinutes} currentValue = {currentMinutes}/>

            </div>

            <div className='basis-1/3'>

            <select id="selectOption" onChange={handleMeridiem} 
            className='w-full p-2 border-2 rounded-md cursor-pointer'
    >
             <option value = {true}  selected = {currentMeridiem ? true : false} >PM</option>
             <option value = {false} selected = {currentMeridiem ? false : true}>AM</option>
             
      
    </select>

            </div>

        </div>




</div>

    </>
  )
}
