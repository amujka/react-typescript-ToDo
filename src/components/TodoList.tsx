import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import {TodoContext} from '../store/todoContext'
const TodoList:React.FC = () => {

    const todosContext= useContext(TodoContext)
    return (
        <ul className="todos">
           {todosContext.todos.map((todo)=>{return <TodoItem todo={todo} key={todo.id} deleteTodoHandler={todosContext.deleteTodo}/> })}
        </ul>
    )
}

export default TodoList
