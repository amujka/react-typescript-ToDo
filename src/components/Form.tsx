import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../store/todoContext'

const Form:React.FC = () => {

    const todoContext = useContext(TodoContext)
    const [newTodo, setnewTodo] = useState("")
    const submitHandler=(e:React.FormEvent)=>{
        e.preventDefault();
todoContext.addTodo(newTodo)
    }
    return (
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className="form">
                <input type="text" placeholder="Add new todo" onChange={(e)=>setnewTodo(e.target.value)}/>
            <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default Form
