import React, { useRef, useState} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { SubmitButton } from './SubmitButton';
  import { useDispatch} from 'react-redux';
import { ChangeHourFormte, MakeDate, dateValidator, getMeridiem } from '../../util';
import {  totalMonths } from '../../data';
import { DueDate } from './DueDate';
import { DueTime } from './DueTime';
import { asyncAddTodo, asyncEditTodo } from '../../redux/actions/asyncAPI';



export const TaskForm = ({handleClose,heading,button,todo,status}) => {


  const initialTitle = todo ? todo.name : '';

  const initialdueDate = todo ? new Date(todo.dueDate) : new Date();

  const initialdetails = todo ? todo.desc : '';

  const intitialHours = todo ? ChangeHourFormte(initialdueDate,"edit") : ChangeHourFormte(initialdueDate,"add")


  const [title,setTitle] = useState(initialTitle) 
  const [details,setDetails] = useState(initialdetails)

  const [day,setDay] = useState(initialdueDate.getDate())
  const [month,setMonth] = useState(totalMonths[initialdueDate.getMonth()])
  const [year,setYear] = useState(initialdueDate.getFullYear())
  const [hours,setHours] = useState(intitialHours)
  const [minutes,setMinutes] = useState(initialdueDate.getMinutes())
  const [meridiem,setMeridium] = useState(getMeridiem(initialdueDate))

  // merdium is true when its PM and flase when its AM

  const nameRef = useRef()


  const dispatch = useDispatch();

  const handleAddSubmit = (e) =>{
  e.preventDefault();

  if(title === '') {
    nameRef.current.focus()
    return 
  }

  const monthIndex= totalMonths.indexOf(month)
  const dueDate = MakeDate(year,monthIndex,day,hours,minutes,meridiem)


  //hour + 1 is for the reason that we default time to be 1 hour after the current time

    if(dueDate === null) {

      alert("Invalid Date")
      return

    }

    if(dateValidator(dueDate)) {
      
      const todo = {
        name: title,
        dueDate:dueDate,
        desc: details,
        createdAt:Date.now(),
        status:false
      }
      
      dispatch(asyncAddTodo(todo))
      handleClose(e)
    } else {

      return

    }
}

const handleEditSubmit = (e) => {

  e.preventDefault();

  if(title === '') {
    nameRef.current.focus()
    return 
  }
 
  const monthIndex= totalMonths.indexOf(month)
  const dueDate = MakeDate(year,monthIndex,day,hours,minutes,meridiem)
   
if(dueDate === null) {

  alert("Invalid Date")
  
  return
}

if(dateValidator(dueDate)) {

  const editedTodo = {
    name: title,
    dueDate:dueDate,
    desc: details,
    createdAt:Date.now(),
    status:status.dueStatus
  }

    dispatch(asyncEditTodo(editedTodo,todo._id))
    handleClose(e)

  } else {

    return
  }
}

  return (
    <>

    <div className='fixed top-0 left-0 right-0 bottom-0 bg-blue-100 bg-opacity-50 
    flex justify-center items-center z-50
    '> 

      <div className='bg-white p-4 md:p-8 w-[22rem] md:w-[600px] space-y-4 rounded-md relative'>

      <div className='absolute top-4 right-4 bg-blue-700 text-white hover:bg-red-600
      
      transition md:p-2 rounded-md cursor-pointer'
      onClick={handleClose}
      >
          
         <ClearIcon fontSize='medium'/>

        </div>

      <div>
          <p className='text-3xl text-center text-blue-700 '>{heading}</p>
          <div className='bg-blue-700 h-[2px] w-full my-2'></div>

        </div>  

        <div className='flex justify-between items-center space-x-0 md:space-x-4'>
          <label htmlFor="title" className='whitespace-nowrap text-lg w-2/12 hidden md:block'>Task Title:</label>
          <input type="text" placeholder='Title'  id='title' className='sign-in-input md:w-10/12 w-full'
          value={title}
          ref = {nameRef}
          onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <DueDate 
        handleDay = {(e) => setDay(parseInt(e.target.value))}  currentDay = {day}
        handleMonth= {(e) => setMonth(e.target.value)}  currentMonth = {month}
        handleYear = {(e) => setYear(parseInt(e.target.value))}   currentYear = {year}
        />

        <DueTime

        handleHours = {(e) => setHours(parseInt(e.target.value))}  currentHours = {hours}
        handleMinutes= {(e) => setMinutes(parseInt(e.target.value))}  currentMinutes = {minutes}
        handleMeridiem = {(e) => setMeridium(JSON.parse(e.target.value))}   currentMeridiem = {meridiem}
        
        />
        
        <div className='flex justify-between items-center space-x-0 md:space-x-4'>
          <label htmlFor="desc" className='whitespace-nowrap text-lg w-2/12 hidden md:block'>Description:</label>
          <textarea type="date" placeholder='Details of Task'  id='desc' className='sign-in-input w-full md:w-10/12 min-h-[8rem]'
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
