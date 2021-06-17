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

   const deleteTodoHandler=(id:number)=>{
     setTodos(
       todos.filter((todo)=>todo.id!==id)
    )
   }
  return (
    <div>
      <Form addTodoHandler={addTodoHandler}/>
      <TodoList todos={todos} deleteTodoHandler={deleteTodoHandler}/>
    </div>
  )
}

export default App
