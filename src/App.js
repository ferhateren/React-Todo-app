import Calender from './components/Calender';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])

  
  const addItem = (userInput) => {
    const newTodos = [...todos, {userInput}]
    setTodos(newTodos)
  }
  const markItem = index =>{
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  const removeItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos)
  }



     console.log(todos);


  return (
    <div className='bg-slate-800 text-white justify-center App '>
      <Calender />
      <TodoInput addItem={addItem} />
      {(todos?.length > 0 )  && <TodoList todos={todos} removeItem={removeItem} markItem={markItem} />}
    </div>
  );
}

export default App;
