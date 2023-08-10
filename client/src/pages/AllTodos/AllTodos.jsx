import React, { useEffect} from 'react'
import { Heading } from '../../components/common/Heading'
import { TodoList } from '../../components/common/TodoList/TodoList'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodosThunk } from '../../redux/actions/asyncAPI'
import { selectAllTodos, selectSortBy } from '../../redux/reducers/todoSlice'
import ClipLoader from "react-spinners/ClipLoader";
import { sortTodos } from '../../util/sortTodos'

export const AllTodos = () => {

  const dispatch = useDispatch();
 
   const Todos = useSelector(selectAllTodos)

  useEffect(() => {

    const loadAllTodos = () => {
      
      
      dispatch(getAllTodosThunk())
    }

    loadAllTodos()
    
  },[])

    
  const sortBy = useSelector(selectSortBy)
  
  const sortedTodos = sortTodos(Todos.allTodos,sortBy)
  

  return (
    <div className='w-full px-4'  >
        <Heading title={"All"}/> 
      {
        Todos.isLoading ? 

        <ClipLoader
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
      
      :

        sortedTodos?.map(todo => <TodoList todo={todo} key={todo._id}/>)
        
      }
    </div>
  )
}
