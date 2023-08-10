import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortTodosBy } from '../../../redux/reducers/todoSlice'

export const SortTodos = () => {


    const dispatch = useDispatch()


    const handleSort = (e) => {

        dispatch(sortTodosBy(e.target.value))

    }
  return (
    <div className='flex justify-end px-2'>
        
        <select name="Sort by" onChange={handleSort} 
        className='text-blue-700 p-2 rounded-md cursor-pointer border-blue-700 border-2'>
            <option value="AtoZ">A to Z</option>
            <option value="ZtoA">Z to A</option>
            <option value="newToOld">New to Old</option>
            <option value="oldToNew" >Old to New</option>
            <option value="dueDate" >Due Date</option>
        </select>

    </div>
  )
}
