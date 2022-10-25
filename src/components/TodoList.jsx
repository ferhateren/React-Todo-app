import React from 'react'
import TodoItem from './TodoItem'
const TodoList = ({ todos,removeItem,markItem }) => {
  
  return (
    <div>
      <ul className='m-0 p-0'>
        {todos?.map((todo,index) => {
          return (
           <li className="" key={index} >
             <TodoItem todo={todo} index={index} removeItem={removeItem} markItem={markItem} />
          </li>
          )
        })}
      </ul>

    </div>
  )
}

export default TodoList