import { createContext,useState} from "react";
import axios from "axios";
import { useEffect} from "react";

const UserContext = createContext ();

export const UserProvider = ({children}) => {
    const [users,setUsers]=useState([]);
    const [loading,setLoading] = useState(true);


    const [darkMode,setDarkMode]=useState(() =>{
        const saved = localStorage.getItem("theme");
        return saved === "true";
    });

    const [isAuth,setIsAuth]=useState(() => {
        const saved = localStorage.getItem("login");
        return saved === "true";
    });


    useEffect(() => {
        localStorage.setItem("login",isAuth);
    },[isAuth])

    const fetchUser = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {setUsers(res.data);
          setLoading(false);})
        .catch(err => {
            console.log(err)
            setLoading(false);
        }
        )
    }

    useEffect(() => {
        localStorage.setItem("theme",darkMode);
    },[darkMode])


    useEffect(() => {
        fetchUser()
    },[])
     
    return (
        <UserContext.Provider value={{users,setUsers,loading,darkMode,setDarkMode,isAuth,setIsAuth                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;                                                                                                                          