import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
    const {isAuth}=useContext(UserContext);
    
    if(!isAuth){
        return <Navigate to="/login"/>
    }

    return children;
}

export default ProtectedRoute;