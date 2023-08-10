
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoList } from '../../components/common/TodoList/TodoList'
import { Heading } from '../../components/common/Heading'
import { getAllTodosThunk } from '../../redux/actions/asyncAPI'
import { selectSortBy } from '../../redux/reducers/todoSlice'
import { sortTodos } from '../../util/sortTodos'

export const Completed = () => {

    const dispatch = useDispatch()

    useEffect(() => {
  
      const loadAllTodos = () => {
        
        
        dispatch(getAllTodosThunk())
      }
  
      loadAllTodos()
      
    },[dispatch])

  const filteredTodos = useSelector(state => {
        const allTodos = state.todos.allTodos;
        
        const pendingTodos = allTodos.filter(todo => todo.status === true);

        return pendingTodos

        })

        
        
  const sortBy = useSelector(selectSortBy)
  
  const sortedTodos = sortTodos(filteredTodos,sortBy)

  return (
    <div className='w-full px-4'>

      <Heading title={"Pending"}/>

      {sortedTodos?.map(todo => <TodoList todo={todo} key={todo._id}/>)}

    </div>
  )
}