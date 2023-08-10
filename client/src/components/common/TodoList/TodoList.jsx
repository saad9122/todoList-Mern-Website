import React, { useState } from 'react'

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import EditOffIcon from '@mui/icons-material/EditOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordian } from './Accordian';
import { TaskForm } from '../../TaskForm/TaskForm';
import { useDispatch } from 'react-redux';
import { asyncToggleStatus } from '../../../redux/actions/asyncAPI';
import { ShowAlert } from './ShowAlert';
import { getTimeRemaining } from '../../../util';


export const TodoList = ({todo}) => {

    const [showDetail,setShowDetail] = useState(false)
    const [showEditForm,setShowEditForm] = useState(false)
    const [showAlert,setShowAlert] =useState(false)


    const dispatch = useDispatch()

    const { days, hours, minutes, seconds } = getTimeRemaining(todo.dueDate)

    // const [dueTimeStatus,setDueTimeStatus] = useState(seconds > 0 ? true : false)

    const [status, setStatus] = useState({
        dueStatus: todo.status,
        dueTimeStatus: seconds > 0 ? true : false
    })
  
    const [dueTime,setDueTime] = useState({
      days: days > 0 ? days : 0,
      hours: hours > 0 ? hours : 0 ,
      minutes: minutes > 0 ? minutes : 0,
      seconds: seconds > 0 ? seconds : 0
    })


    const handleShowDetails = () => {

        setShowDetail(!showDetail)
    }

    const handleshowEditForm = (e) => {

        e.stopPropagation();
        setShowEditForm(!showEditForm)
    }
    const handleStatus = () => {

        setStatus({
            ...status,
            dueStatus:!status.dueStatus
            
        })
        dispatch(asyncToggleStatus(todo))
    }

    const toggleShowAlert = () => {
        setShowAlert(!showAlert)
    }

    const handleDeleteTodo = (e) => {
        e.stopPropagation()
       
        toggleShowAlert()
    }

  return (
    <>
    <div className='flex space-x-2 items-start relative'>

                   {/* ======================== Check Box ================================== */}

        <div className='flex items-center'>
             <input type='checkbox' checked={status.dueStatus} className='cursor-pointer w-4 h-4 translate-y-7'
             onChange={handleStatus}
             />

        </div>
        
        <div className='grow'>
            <div className={`px-2 mt-2 p-2 py-4 rounded-tl-md rounded-tr-md
            flex justify-between items-center cursor-pointer space-x-2 
            ${status.dueStatus ? 'bg-green-600' :  (status.dueTimeStatus ? 'bg-orange-500' : 'bg-red-600')}
            `}
                onClick={handleShowDetails}
                >
                    <div className='flex space-x-2 items-center'>
                        <p className={`${showDetail ? 'rotate-180' : ''} transition-all`}>
                        <KeyboardArrowDownIcon sx={{ color:'white' }}/></p>

                        <p className={`${status.dueStatus ? 'line-through': '' } text-xl text-white`}>{todo.name}</p>
                    </div>

                    
                    <div className='space-x-3 shrink-0'>

                      <button  className='z-20'
                        onClick ={handleshowEditForm}  
                        disabled= {status.dueStatus}
                        >
                            {!status.dueStatus ? <EditIcon sx={{ color:'white' }}/>  : <EditOffIcon sx={{ color:'white' }} />}
                            
                        </button>
                   
                        <button
                        onClick={handleDeleteTodo}
                        ><ClearIcon sx={{ color:'white' }} />  </button>
                        
                    </div>
                    
            </div>
            {
                showDetail && <Accordian  todo = {todo} status = {status} dueTime={dueTime} setDueTime={setDueTime}
                setStatus={setStatus}
                />
            }

        </div>
        {
         showEditForm && <TaskForm handleClose = {handleshowEditForm} heading="Edit Todo" button ="Update" 
         todo = {todo} status = {status}
         />
        }

        {
            showAlert && <ShowAlert handleClose = {toggleShowAlert} todo = {todo} />
        }


    </div>



    

    </>
  )
}
