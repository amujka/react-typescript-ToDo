import React, { FC } from 'react';
import { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList'
import Todo from './model/todo';
import Form from './components/Form'


const App:FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
   const addTodoHandler=(todo:string)=>{
     setTodos([...todos,new Todo(todo)])
   };
  return (
    <div>
      <Form addTodoHandler={addTodoHandler}/>
      <TodoList todos={todos}/>
    </div>
  )
}

export default App
