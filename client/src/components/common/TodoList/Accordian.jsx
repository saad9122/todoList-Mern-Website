import React, { startTransition, useEffect, useState } from 'react'
import { formateDate, getTimeRemaining } from '../../../util'

export const Accordian = ({todo,status,dueTime,setDueTime,setStatus}) => {

  useEffect(() => {

    const updateDueTime = () => {

      const { days, hours, minutes, seconds } = getTimeRemaining(todo.dueDate)

      if(seconds < 0){

          setStatus({
            ...status,
            dueTimeStatus:false
          })
          
        } else {

          setDueTime({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
          })

          if(!status.dueTimeStatus) {
            setStatus({
              dueStatus:status.dueStatus,
              dueTimeStatus:true
            })
          }
    
    
  }}

  const intervaId =setInterval(updateDueTime, 1000);

  return () => clearInterval(intervaId)
},[status])




  return (
    <div className={`rounded-bl-md rounded-br-md px-4 py-2
    ${status.dueStatus ? 'bg-green-300' :  (status.dueTimeStatus ? 'bg-orange-200' : 'bg-red-300')}
    `}>

      {/* ====================Status and Countdown clock ======================= */}
      <div className="flex flex-col space-y-2 justify-between md:flex-row ">
          <div className='flex justify-center items-center'>
            <p className={`${status.dueStatus ? 'bg-green-600' :  (status.dueTimeStatus ? 'bg-orange-500' : 'bg-red-600')} inline-block text-white p-2
              rounded-lg
              `}>

              <span className='font-semibold'> Status: </span> {`${status.dueStatus ? 'Completed' :  
              (status.dueTimeStatus ? 'Pending' : 'Late')}`} </p>

           </div>

                   
           { !todo.status && <div className='space-x-2 flex items-center justify-center'>

                <div className='flex-col justify-center items-baseline'> 
                  <p className={`py-2 px-3 rounded ${status.dueStatus ? 'bg-green-600' :  
                  (status.dueTimeStatus ? 'bg-orange-400' : 'bg-red-500')} text-white`}>
                    
                  {dueTime.days}</p>

                  <p className='text-xs text-center'>{dueTime.days > 1 ? "Days" : "Day"}</p>
                </div>

                <div className='flex-col justify-center items-baseline'> 
                  <p className={`py-2 px-3 rounded ${status.dueStatus ? 'bg-green-600' :  
                  (status.dueTimeStatus ? 'bg-orange-400' : 'bg-red-500')} text-white`}>{dueTime.hours}</p>

                  <p className='text-xs text-center'>{dueTime.hours > 1 ? "Hours" : "Hour"}</p>
                </div> 

                <div className='flex-col justify-center items-baseline'> 
                  <p className={`py-2 px-3 rounded ${status.dueStatus ? 'bg-green-600' :  
                  (status.dueTimeStatus ? 'bg-orange-400' : 'bg-red-500')} text-white`}>{dueTime.minutes}</p>

                  <p className='text-xs text-center'>{dueTime.minutes > 1 ? "Mins" : "Min"}</p>
                </div> 

                <div className='flex-col justify-center items-baseline'> 
                  <p className={`py-2 px-3 rounded ${status.dueStatus ? 'bg-green-600' :  
                  (status.dueTimeStatus ? 'bg-orange-400' : 'bg-red-500')} text-white`}>{dueTime.seconds}</p>

                  <p className='text-xs text-center'>{dueTime.seconds > 1 ? "Secs" : "Sec"}</p>
                </div> 

           </div>}
 

      </div>


      {/* ====================Dates ======================= */}


      <div className='flex flex-col py-2 space-y-2
      lg:flex-row lg:py-0 lg:space-y-0
       justify-evenly text-center'>
          
          <p> <span className='font-semibold'> Added on </span> {formateDate(todo.createdAt)}</p>

          <p> <span className='font-semibold'> Due on </span> {formateDate(todo.dueDate)}</p>

      </div>

      <div className={`${status.dueStatus ? 'bg-green-600' :  (status.dueTimeStatus ? 'bg-orange-400' : 'bg-red-500')} h-[3px] w-full my-2`}></div>
        
        <div> 
            <p>   <span className='font-semibold'>Tasks Details:  </span>

            {todo.desc === "" ? 
              "  No Details available " : todo.desc 
             }
            </p>
        </div>
        
    </div>
  )
}
