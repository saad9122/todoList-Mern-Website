import React, { useState } from 'react'

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordian } from './Accordian';
import { TaskForm } from '../../TaskForm/TaskForm';


export const TodoList = ({todo}) => {

    const [showDetail,setShowDetail] = useState(false)
    const [status, setStatus] = useState(false)
    const [showEditForm,setShowEditForm] = useState(false)

    const handleShowDetails = () => {


        setShowDetail(!showDetail)
    }

    const handleshowEditForm = (e) => {

        e.stopPropagation();
        setShowEditForm(!showEditForm)
    }
    const handleStatus =() => {
        setStatus(!status)
    }
  return (
    <>
    
    <div className='flex space-x-2 items-start '>
        <div className='flex items-center'>
             <input type='checkbox' checked={status} className='cursor-pointer w-4 h-4 translate-y-7'
             onChange={handleStatus}
             />

        </div>
        
        <div className='grow'>
            <div className={`px-2 mt-2 p-2  py-4 rounded-tl-md rounded-tr-md flex justify-between cursor-pointer
            ${status ? 'bg-green-600' : 'bg-red-600'}
            `}
                onClick={handleShowDetails}
                >
                    <div className='flex space-x-2'>
                        <p className={`${showDetail ? 'rotate-180' : ''} transition-all`}>
                        <KeyboardArrowDownIcon sx={{ color:'white' }}/></p>

                        <p className={`${status ? 'line-through': '' } text-xl text-white`}>{todo.name}</p>
                    </div>
                    
                    <div className='space-x-3'>
                        <button  className='z-20'
                        onClick ={handleshowEditForm}
                        ><EditIcon sx={{ color:'white' }}/>  </button>
                        <button><ClearIcon sx={{ color:'white' }} />  </button>
                        
                    </div>
                    
            </div>
            {
                showDetail && <Accordian  todo = {todo} status = {status}/>
            }

        </div>
        {
         showEditForm && <TaskForm handleClose = {handleshowEditForm} heading="Edit Todo" button ="Update" 
         todo = {todo} 
         />
        }


    </div>



    

    </>
  )
}
