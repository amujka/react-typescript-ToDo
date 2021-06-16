import React, { FC } from 'react';
import { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList'
import Todo from './model/todo';



const App:FC = () => {

  const [todos, setTodos] = useState([
    new Todo("Learn React"),new Todo("Learn TypeScript"),new Todo("Become Full-stack dev")
  ])
  return (
    <div>
      <TodoList todos={todos}/>
    </div>
  )
}

export default App
