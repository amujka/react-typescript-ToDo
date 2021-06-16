import React, { useState } from 'react'

const Form:React.FC<{addTodoHandler:(todo:string)=>void}> = ({addTodoHandler}) => {

    const [newTodo, setnewTodo] = useState("")

    const submitHandler=(e:React.FormEvent)=>{
        e.preventDefault();
addTodoHandler(newTodo)
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
