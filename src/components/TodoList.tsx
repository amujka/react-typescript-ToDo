import React from 'react'
import Todo from '../model/todo'
import TodoItem from './TodoItem'

const TodoList:React.FC<{todos:Todo[]}> = ({todos}) => {
    return (
        <ul className="todos">
           {todos.map((todo)=>{return <TodoItem todo={todo} key={todo.id}/> })}
        </ul>
    )
}

export default TodoList
