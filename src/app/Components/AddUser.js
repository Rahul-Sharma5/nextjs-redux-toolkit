"use client"
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";


export default function AddUser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  const userDispatch = () =>{
  dispatch(addUser(name))
  }
  return (
    <div className="add-user">
      <h3>Add User</h3>
      <input
        className="add-user-input"
        onChange={(e)=>setName(e.target.value)}
        type="text"
        name="name"
        placeholder="User Name"
      ></input>
      <button onClick={userDispatch} className="add-user-btn">Add User</button>
      <Link href="/removeuser">Remove User</Link>
      <br/>
      <Link href="/todolist">Todo-list Page</Link>
      <br/>
      <Link href="/apiusers">Api-Users</Link>
    </div>
  );
}
