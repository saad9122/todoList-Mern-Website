import React, { useState } from 'react'
import { TaskForm } from '../TaskForm/TaskForm'
import{ todosSlice, addNewTodo, getAllTodos, selectAllTodos } from '../../redux/reducers/todoSlice'

export const Heading = ({title}) => {
  const [showTaskForm, setShowTaskForm]= useState(false)

  const handleshowTaskForm = () => {
    setShowTaskForm(!showTaskForm)
  }

  const handleTestButton = () => {
      console.log(getAllTodos())
  }
  return (
    <div className='py-4 w-full'> 
        <p className='text-4xl text-blue-600'>{title}'s Tasks</p>
        <div className='bg-blue-600 h-[2px] w-full my-4'>
        </div>

        <div>
          <button
          className='border-2 p-2 px-4 rounded-md hover:bg-blue-700 hover:text-white transition text-lg'
          onClick={handleshowTaskForm}
          >+ Add New Task</button>
          
        </div>

          {
            showTaskForm && <TaskForm handleClose = {handleshowTaskForm} heading="Add New Task" button ="Add"/>
          }

          <button
          onClick={handleTestButton}
          >Test Button</button>


    </div>
  )
}
