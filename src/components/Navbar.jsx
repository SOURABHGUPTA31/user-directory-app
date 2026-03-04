import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){
  const {isAuth,setIsAuth} =useContext(UserContext);
  const navigate=useNavigate();

    return(
      <div>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>

         {isAuth ? 
         ( <button onClick={() => setIsAuth(false)}>logOut</button>):
         (<button onClick={() => navigate("/login")}>login</button>)}

      </div>
    )
}

export default Navbar;