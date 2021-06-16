import React from 'react'
import Todo from '../model/todo'

const TodoItem:React.FC<{todo:Todo}> = ({todo}) => {
    return (
        <li className="item">
           {todo.name} 
        </li>
    )
}

export default TodoItem
