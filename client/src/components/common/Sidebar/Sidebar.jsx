import React, { useState } from 'react'
import './sidebar.css'

import { Link } from 'react-router-dom';
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmIcon from '@mui/icons-material/Alarm';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const Sidebar = () => {
  const [showAddProject,setShowAddProject] = useState(true)

  const toggleAddProject = () => {

    setShowAddProject(!showAddProject)

  }

  const handleAddProject = () => {

    setShowAddProject(!showAddProject)

  }

  return (
    <div className='sidebar bg-blue-600 text-gray-200'>

      <div className='space-y-4'>

         <p className='cursor-pointer'> <Link to='/todos'> <TodayIcon /> All Todos</Link></p>
          <p className='cursor-pointer'> <Link to='/today'> <TodayIcon /> Today </Link></p>
          <p className='cursor-pointer'> <Link to='/week'><DateRangeIcon/> This week</Link></p>
          <p className='cursor-pointer'> <Link to='/month'> <CalendarMonthIcon/> This Month</Link></p> 
          <p className='cursor-pointer'> <Link to='/urgent'> <AlarmIcon/> Urgent </Link> </p> 

      </div>
    </div>
  )
}
