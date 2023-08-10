import React from 'react'
import { Dropdown } from '../common/Dropdown'
import { totalDays, totalMonths, totalYearsTodos } from '../../data'

export const DueDate = ({handleDay,handleMonth,handleYear,currentDay,currentMonth,currentYear}) => {
  return (
    <>
    <div className='flex justify-between items-center space-x-0
    md:space-x-4
    '>

    <label htmlFor="duedate" className='whitespace-nowrap text-lg w-2/12 hidden
    md:block
    '>Due Date:</label>

    <div className='w-full md:w-10/12 flex space-x-4'>

    <div className='basis-1/3'>

            <Dropdown data = {totalDays} handleChange={handleDay} currentValue = {currentDay}/>

            </div>

            <div className='basis-1/3'>

            <Dropdown data = {totalMonths} handleChange={handleMonth} currentValue = {currentMonth}/>

            </div>

            <div className='basis-1/3'>

            <Dropdown data = {totalYearsTodos} handleChange={handleYear} currentValue = {currentYear}/>

            </div>

        </div>
    </div>

    </>
  )
}
