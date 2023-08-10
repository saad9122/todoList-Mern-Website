import React, { useState } from 'react'
import { TaskForm } from '../TaskForm/TaskForm'
import{ getAllTodos } from '../../redux/reducers/todoSlice'
import { DeleteAlert } from './alert/DeleteAlert'
import { asyncDeleteDoneTodos } from '../../redux/actions/asyncAPI'
import { useDispatch } from 'react-redux'
import { SortTodos } from './sortTodos/SortTodos'

export const Heading = ({title}) => {
  const [showTaskForm, setShowTaskForm]= useState(false)
  const [showAlert,setShowAlert] = useState(false)

  const dispatch = useDispatch()

  const handleshowTaskForm = () => {
    setShowTaskForm(!showTaskForm)
  }

  const handleshowAlert = () => {
    setShowAlert(!showAlert)
  }

  const handleConfirmDelete = (e) => {
    
    dispatch(asyncDeleteDoneTodos())

    handleshowAlert()
  }


  return (
    <div className='py-4 w-full'> 
        <p className='text-4xl text-blue-600'>{title} Todos</p>
        <div className='bg-blue-600 h-[2px] w-full my-4'>
        </div>

        <div className='space-y-3 space-x-2'>
          <button
          className='border-2 p-2 px-4 rounded-md hover:bg-blue-700 hover:text-white transition md:text-lg'
          onClick={handleshowTaskForm}
          >+ Add Task</button>

          <button
          className='border-2 p-2 px-4 rounded-md hover:bg-red-700 hover:text-white transition md:text-lg'
          onClick={handleshowAlert}
          >
            Delete Done Todos
          </button>
          
        </div>

        {
          showAlert && <DeleteAlert handleClose={handleshowAlert} 
          handleConfirmDelete = {handleConfirmDelete} data = {"AllTasks"}/>
        }

          {
            showTaskForm && <TaskForm handleClose = {handleshowTaskForm} heading="Add New Task" button ="Add"/>
          }
{/* 
          <button
          onClick={handleTestButton}
          >Test Button</button> */}

          <SortTodos />

    </div>
  )
}
