import React from 'react'
import { Heading } from '../../components/common/Heading'
import { Todos } from '../../data'
import { TodoList } from '../../components/common/TodoList/TodoList'

export const TodaysTasks = () => {
  return (
    <div className='w-full px-4'>

      <Heading title={"Today"}/>
      
      {

        Todos.map(todo => <TodoList todo={todo}/>)
        
      }

    </div>
  )
}
