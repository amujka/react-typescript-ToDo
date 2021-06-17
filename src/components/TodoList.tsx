import React from 'react'
import Todo from '../model/todo'
import TodoItem from './TodoItem'

const TodoList:React.FC<{todos:Todo[],deleteTodoHandler:(id:number)=>void}> = ({todos,deleteTodoHandler}) => {
    return (
        <ul className="todos">
           {todos.map((todo)=>{return <TodoItem todo={todo} key={todo.id} deleteTodoHandler={deleteTodoHandler}/> })}
        </ul>
    )
}

export default TodoList
