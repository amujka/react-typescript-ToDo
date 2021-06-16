import React from 'react'
import Todo from '../model/todo'

const TodoList:React.FC<{todos:Todo[]}> = ({todos}) => {
    return (
        <ul>
           {todos.map((todo)=>{return <li key={todo.id}>{todo.name}</li> })}
        </ul>
    )
}

export default TodoList
