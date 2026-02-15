import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Users(){

    const {users,loading}=useContext(UserContext);
    const {id} = useParams();
    const navigate=useNavigate();

    const user = users.find(u => u.id == Number(id))
       
    if(loading){
        return <h2>loading user detail...</h2>;
    }
    
     if(!user){
        return <h1>User not found</h1>
     }

        return (
        <div>
            <h1>user detail</h1>
             
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>phone no.: {user.phone}</p>

             <button onClick={() => navigate("/")}>back</button>
        </div>
    )
}

export default Users;