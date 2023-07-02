import React, { useEffect } from 'react'
import { Heading } from '../../components/common/Heading'
import { TodoList } from '../../components/common/TodoList/TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodosThunk } from '../../redux/actions/asyncAPI'
import { selectAllTodos } from '../../redux/reducers/todoSlice'

export const AllTodos = () => {

  const dispatch = useDispatch();
  const Todos = useSelector(selectAllTodos)

  useEffect(() => {

    const loadAllTodos = () => {
      dispatch(getAllTodosThunk())

    }

    loadAllTodos()
    
  },[])

  const handleTest = () => {
    console.log(Todos)
  }

  return (
    <div className='w-full px-4'  >
        <Heading title={"All"}/>

        <button
        onClick={handleTest}
        >All Todos Test</button>
      {

        Todos?.map(todo => <TodoList todo={todo}/>)
        
      }
    </div>
  )
}
