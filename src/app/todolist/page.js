"use client"
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function Page(){
    const [todo, setTodo] = useState("")
    const todoData=useSelector((data)=>data.todosData.todos)
    //console.log(todoData)
    const dispatch=useDispatch()
    return(
        <div>
            <h3>Add Todo</h3>
            <input type="text" onChange={(e)=>setTodo(e.target.value)} placeholder="add new task"></input>
            <button onClick={()=>dispatch(addTodos(todo))}>Add Todo</button>
            
            <div><h5>Todo List</h5></div>
            {
                todoData.length && todoData.map((item)=>(
                    <h6 key={item.id}>{item.name}</h6>
                ))
            }

            <div>
            <Link href="/">Go back</Link>
            </div>
        </div>
    )
}