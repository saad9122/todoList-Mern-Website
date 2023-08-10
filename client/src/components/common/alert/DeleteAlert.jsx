import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';


export const DeleteAlert = ({handleClose,handleConfirmDelete,data}) => {
  return (
    <>
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-blue-100 z-20 bg-opacity-50 
    flex justify-center items-center
    '> 

      <div className='bg-white p-8 w-[22rem] md:w-[500px] space-y-4 rounded-md relative'>

        
      <div className='absolute top-4 right-4 bg-blue-700 text-white hover:bg-red-600
      
      transition p-2 rounded-md cursor-pointer'
      onClick={handleClose}
      >
          
         <ClearIcon fontSize='medium'/>

        </div>

        <div className='pt-4'>

            {
                data === "oneTask"? 
                
                <h1 className='text-lg'>Are you sure you want to delete this task? All progress on this task will be lost.
                This process is irreversible
                </h1> :

                <h1 className='text-lg'>Are you sure you want to delete all completed tasks? All progress on these tasks will be lost.
                This process is irreversible
                </h1>
            }
            

        </div>

        <div className='flex justify-around pt-4'>
            <button
            className='bg-blue-600 text-white hover:bg-red-600 transition p-2 rounded-md w-1/3 md:w-1/6'
            onClick={handleConfirmDelete}

            >Yes</button>
            <button
            className='bg-blue-700 text-white hover:bg-green-600 transition p-2 rounded-md w-1/3 md:w-1/6'
            onClick={handleClose}
            
            >Cencel</button>
        </div>
   

      </div>
          
    
     </div>
    </>
  )
}
