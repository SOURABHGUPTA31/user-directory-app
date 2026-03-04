import { useContext, useState, useRef, useEffect} from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [error,setError]=useState("")
const {setIsAuth}=useContext(UserContext);
const navigate= useNavigate();
const emailRef =  useRef(null);



const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if(email=== ""){
       setError("Email required")
       return;
    }

    if(password === ""){
        setError("Password required")
        return;

    }

    if(password.length < 6){
        setError("password must be at least 6 characters")
        return;
    }

    if(!email.includes("@") || !email.includes(".") ){
        setError("invalid email formate");
        return;
    }


    setIsAuth(true)
    navigate("/")

}

    useEffect(() => {
        emailRef.current.focus();
    },[]);



    return(
        <div>

            <h2>Login page</h2>

            <form onSubmit={handleLogin}>

            <h2>{error}</h2>

                
             <br/>

               <input type="text"
               placeholder="Enter Email"
               value={email}
               ref={emailRef}
               onChange={(e) => setEmail(e.target.value)} />

               <br/><br/>

               <input type="password"
               value={password}
               placeholder="enter Password"
               onChange={(e) => setPassword(e.target.value)} />

               <br/><br/>

             <button type="submit">Login</button>
            </form>
            
        </div>
    )

}


export default Login;