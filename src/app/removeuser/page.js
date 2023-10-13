"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";
import Link from "next/link";

export default function Page(){
    const userData = useSelector((data) => data.usersData.users);
    //console.log(userData)
    const dispatch = useDispatch()
    return(
       
        <div className="display-user">
            <h2>Remove Page</h2>
            {
                userData.map((item)=>(
                    <div className="user-item">
                        <span>{item.name}</span>
                        <button onClick={()=>dispatch(removeUser(item.id))}>Remove User</button>
                    </div>
                ))
            }
            <Link href="/">Back</Link>
        </div>
        
    )
}