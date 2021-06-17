import React, { useState } from "react"
import Todo from "../model/todo"

type todoContextObj={ 
       todos:Todo[];
    addTodo:(todo:string)=>void;
    deleteTodo:(id:number)=>void
}
export const TodoContext=React.createContext<todoContextObj>({
    todos:[],
    addTodo:()=>{},
    deleteTodo:(id)=>{}
})

const TodoContextProvider:React.FC=(props)=>{
    
  const [todos, setTodos] = useState<Todo[]>([]);
   const addTodoHandler=(todo:string)=>{
     setTodos([...todos,new Todo(todo)])
   };

   const deleteTodoHandler=(id:number)=>{
     setTodos(
       todos.filter((todo)=>todo.id!==id)
    )
   }

   const contextValue:todoContextObj={
       todos:todos,
       addTodo:addTodoHandler,
       deleteTodo:deleteTodoHandler
   }
return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}

export default TodoContextProvider