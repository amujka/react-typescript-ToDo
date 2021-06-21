import React from 'react'
import Todo from '../model/todo'
const TodoItem:React.FC<{todo:Todo,deleteTodoHandler:(id:number)=>void}> = ({todo,deleteTodoHandler}) => {
    return (
        <li className="item"     onClick={()=>{deleteTodoHandler(todo.id)}}>
           {todo.name} 
        </li>
    )
}
export default TodoItem
