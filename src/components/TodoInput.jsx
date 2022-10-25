import React, { useState } from 'react'
import plus from '../img/plus.svg'

function TodoInput({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addItem(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative justify-center  ">
      <input className='w-full p-5 pr-20 border-none box-border rounded outline-none text-slate-400 mb-2.5 w-full h-16 bg-gray-900'
        type="text"
        value={value}
        placeholder="Add new item"
        onChange={(e) => setValue(e.target.value) } />
      <img className='absolute right-6 top-4' src={plus} alt="plus" onClick={handleSubmit} />
    </form>
  )
}

export default TodoInput