import { createContext,useState} from "react";
import axios from "axios";
import { useEffect } from "react";

const UserContext = createContext ();

export const UserProvider = ({children}) => {
    const [users,setUsers]=useState([]);
    const [loading,setLoading] = useState(true);

    const fetchUser = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {setUsers(res.data);
          setLoading(false);})
        .catch(err => console.log(err)
        )
    }


    useEffect(() => {
        fetchUser()
    },[])
     
    return (
        <UserContext.Provider value={{users,setUsers,loading}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;