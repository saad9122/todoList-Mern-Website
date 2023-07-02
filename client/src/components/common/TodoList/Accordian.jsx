import React from 'react'

export const Accordian = ({todo,status}) => {
  return (
    <div className={`rounded-bl-md rounded-br-md px-4 py-2
    ${status ? 'bg-green-300' : 'bg-red-300'}
    `}>
      <div className={``}>
          <p className={`${status ? 'bg-green-600' : 'bg-red-600'} inline-block text-white p-2
          rounded-lg
          `}>

           <span className='font-semibold'> Status: </span> {`${!status ? 'Pending' : 'Completed'}`} </p>


      </div>
      <div className='flex justify-evenly'>
          
          <p> <span className='font-semibold'> Added on </span> {todo.createdAt} </p>

          <p> <span className='font-semibold'> Due on </span> {todo.dueDate} </p>

      </div>

      <div className={`${status ? 'bg-green-600' : 'bg-red-600'} h-[3px] w-full my-2`}></div>
        
        <div> 
            <p className='font-semibold'>Tasks Details:</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. 
            </p>
        </div>
        
    </div>
  )
}
