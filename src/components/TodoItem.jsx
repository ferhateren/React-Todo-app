import React from 'react'

const TodoItem = ({ todo, index, removeItem, markItem }) => {
  return (
    <div className='items-center flex w-full min-h-[75px] mb-2 p-5 box-border rounded border-none bg-gray-500 justify-between text-lg'>
      <span className={(todo.isDone ? "line-through" : "")}>{todo.userInput}</span>
      <div className='flex'>
        <button className='text-xs content-center' onClick={() => markItem(index)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
        </button>
        <button className='ml-3' onClick={() => removeItem(index)}>X</button>
      </div>
    </div>
  )
}

export default TodoItem