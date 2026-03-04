import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useState, useEffect, useRef , useMemo } from "react";

function Home(){
    const [search,setSearch] = useState("");
    const {users,loading,darkMode,setDarkMode}=useContext(UserContext);
    const navigate=useNavigate();
    const renderCount=useRef(0);
    const [debouncedSearch,setdebouncedSearch] = useState("");

    useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    const timer =setTimeout(() => {
      setdebouncedSearch(search);
    },300);

    return () => clearTimeout(timer);
  },[search]);

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
    );
  },[users,debouncedSearch])

  if(!loading && users.length === 0){
    return <h2>No user found</h2>}

  if(loading){
    return <h1>Loading users...</h1>
  }


    
    return(
        <div style={{background : darkMode ? "black" : "white", color: darkMode  ? "white" : "black",
          minHeight:"100vh"
         }}>
          <p>Render Count : {renderCount.current}</p>
            <h1>users</h1>

            <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>

            <input 
            type="text"
            value={search}
            placeholder="search user..." 
            onChange={(e) => setSearch(e.target.value)}/>
       
      
            {filteredUsers.map(singleUser =>(
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