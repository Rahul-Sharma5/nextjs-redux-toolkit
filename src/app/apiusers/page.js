"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"
import { useEffect } from "react"

export default function Page(){
    const dispatch = useDispatch()
    const apiUserData = useSelector((data)=>data.usersData.userAPIData)
    //console.log(apiUserData)

    useEffect(()=>{
        dispatch(fetchApiUsers())
    },[])
    return(
        <div>
            <h2>User List from Api</h2>
            {/* <button onClick={()=>dispatch(fetchApiUsers())}>Load Users</button> */}
            {
                apiUserData.length && apiUserData.map((item)=>(
                <h4>{item.name}</h4>
                ))
            }
        </div>
    )
}