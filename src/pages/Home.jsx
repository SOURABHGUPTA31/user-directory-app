import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Home(){
    const {users,loading}=useContext(UserContext);
    const navigate=useNavigate();

  if(!loading && users.length === 0){
    return <h2>No user found</h2>}

  if(loading){
    return <h1>Loading users...</h1>
  }
       
    
    return(
        <div>
            <h1>users</h1>

            {users.map(singleUser =>(
                <div key={singleUser.id}>
                    {singleUser.name}
                    <button onClick={() => navigate(`/user/${singleUser.id}`)}>
                        view profile
                    </button>
                </div>
            ))}
        </div>
    )

}

export default Home;