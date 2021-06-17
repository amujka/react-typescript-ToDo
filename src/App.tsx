import React, { FC } from 'react';

import './App.css'
import TodoList from './components/TodoList'
import TodoContextProvider from './store/todoContext'
import Form from './components/Form'


const App:FC = () => {

  return (
    <TodoContextProvider>
      <Form/>
      <TodoList  />
    </TodoContextProvider>
  )
}

export default App
