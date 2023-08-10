import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

export const Sidebar = () => {


  return (
    <div className='sidebar bg-blue-600 text-gray-200'>

      <div className='flex flex-wrap py-2 space-y-1 md:flex-col md:space-y-4
      '>

         <p className='cursor-pointer  basis-1/2'> <Link to='/todos'> <DateRangeIcon /> All Todos</Link></p>
         <p className='cursor-pointer basis-1/2'> <Link to='/today'> <TodayIcon /> Today </Link></p>
         <p className='cursor-pointer basis-1/2'> <Link to='/pending'> <QueryBuilderIcon /> Pending </Link></p>
         <p className='cursor-pointer basis-1/2'> <Link to='/completed'> <ChecklistRtlIcon /> Completed </Link></p>
         <p className='cursor-pointer basis-1/2'> <Link to='/late'> <HourglassBottomIcon /> Late </Link></p>


      </div>
    </div>
  )
}
