import React from 'react'
import { Link } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const Footer = () => {
  return (
    <div className='bg-gray-800 text-gray-200 p-2 flex space-y-1 justify-start flex-col text-center
    '>
        <p className='text-sm'>A Fully Featured Todos Web Application with MERN and Redux</p>
        <p className='text-sm font-light'>Designed & Developed by: 
        <span className='text-blue-300 font-semibold'> 
        <Link to={"https://portfolio-delta-one-93.vercel.app/"} target='blank'> Saad-ur-Rehman<ArrowOutwardIcon sx={{ fontSize: 12 }}/></Link> 
        </span></p>
    </div>
  )
}
