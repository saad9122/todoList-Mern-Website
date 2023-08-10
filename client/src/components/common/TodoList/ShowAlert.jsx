import React from 'react'
import { useDispatch } from 'react-redux';
import { asyncDeleteTodo } from '../../../redux/actions/asyncAPI';
import { DeleteAlert } from '../alert/DeleteAlert';


export const ShowAlert = ({handleClose,todo}) => {

    const dispatch = useDispatch()



    const handleConfirmDelete = (e) => {

        e.stopPropagation()
        dispatch(asyncDeleteTodo(todo._id))
        handleClose()
    }

  return (
    <>
    <DeleteAlert  handleClose = {handleClose} handleConfirmDelete ={handleConfirmDelete}  data = {"oneTask"}/>
    </>
  )
}
