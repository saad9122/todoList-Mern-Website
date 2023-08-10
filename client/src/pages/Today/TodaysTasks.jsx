import React, { useEffect } from 'react'
import { Heading } from '../../components/common/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../../components/common/TodoList/TodoList'
import { getAllTodosThunk } from '../../redux/actions/asyncAPI'
import { sortTodos } from '../../util/sortTodos'
import { selectSortBy } from '../../redux/reducers/todoSlice'

export const TodaysTasks = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    const loadAllTodos = () => {
      
      
      dispatch(getAllTodosThunk())
    }

    loadAllTodos()
    
  },[dispatch])
  const todaysTodos = useSelector(state => {
    const allTodos = state.todos.allTodos;

    const todayDate = new Date();
    todayDate.setHours(0,0,0,0)

    const filteredTodos = allTodos.filter(todo => {

      const dueDate = new Date(todo.dueDate)
      dueDate.setHours(0,0,0,0)

      return todayDate.getTime() === dueDate.getTime()

    })

    return filteredTodos

  })


  const sortBy = useSelector(selectSortBy)
  
  const sortedTodos = sortTodos(todaysTodos,sortBy)
  

  return (
    <div className='w-full px-4'>

      <Heading title={"Today"}/>

      {sortedTodos?.map(todo => <TodoList todo={todo} key={todo._id}/>)}

    </div>
  )
}
