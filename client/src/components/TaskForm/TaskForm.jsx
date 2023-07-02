import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { SubmitButton } from './SubmitButton';
import { useDispatch,useSelector } from 'react-redux';
import { selectAllTodos } from '../../redux/reducers/todoSlice';
import { addTodo } from '../../redux/actions/asyncAPI';

export const TaskForm = ({handleClose,heading,button,todo}) => {


  const initialTitle = todo ? todo.name : '';

  const initialdueDate = todo ? todo.dueDate : '';

  const initialdetails = todo ? todo.desc : '';


  const [title,setTitle] = useState(initialTitle)
  const [dueDate,setDueDate] = useState(initialdueDate)
  const [details,setDetails] = useState(initialdetails)

  const dispatch = useDispatch();

  const allTodos = useSelector(selectAllTodos)

const handleAddSubmit = (e) =>{
e.preventDefault();

const todo = {
  name: title,
  dueDate:dueDate,
  desc: details,
  createdAt:Date.now()
}

dispatch(addTodo(todo))
handleClose()

}

const handleEditSubmit = () => [
  console.log("Add Todo")

]

  return (
    <>

    <div className='fixed top-0 left-0 right-0 bottom-0 bg-blue-100 z-20 bg-opacity-50 
    flex justify-center items-center
    '> 

      <div className='bg-white p-8 w-[600px] space-y-4 rounded-md relative'>

      <div className='absolute top-4 right-4 bg-blue-700 text-white hover:bg-red-600
      
      transition p-2 rounded-md cursor-pointer'
      onClick={handleClose}
      >
          
         <ClearIcon fontSize='medium'/>

        </div>

      <div>
          <p className='text-3xl text-center text-blue-700 '>{heading}</p>
          <div className='bg-blue-700 h-[2px] w-full my-2'></div>

        </div>  

        <div className='flex justify-between items-center space-x-4'>
          <label htmlFor="title" className='whitespace-nowrap text-lg w-2/12'>Task Title:</label>
          <input type="text" placeholder='Title'  id='title' className='sign-in-input w-10/12'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='flex justify-between items-center space-x-4'>
          <label htmlFor="duedate" className='whitespace-nowrap text-lg w-2/12'>Due on:</label>
          <input type="date" placeholder='Title'  id='duedate' className='sign-in-input w-10/12'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}

          />
        </div>
        
        <div className='flex justify-between items-center space-x-4'>
          <label htmlFor="desc" className='whitespace-nowrap text-lg w-2/12'>Description:</label>
          <textarea type="date" placeholder='Details of Task'  id='desc' className='sign-in-input w-10/12 min-h-[8rem]'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          />
        </div>


        {
          button === 'Update' ? 

          <SubmitButton button={button} handleSubmit={handleEditSubmit}/>
          
          :
          <SubmitButton button={button} handleSubmit={handleAddSubmit}/>

        }
          

        

      </div>
          
    
     </div>
    </>
  )
}
