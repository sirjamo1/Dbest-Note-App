import { useState, createContext, useContext, useEffect } from "react";

//assigning to AuthContext and giving it a default value of null
const AuthContext = createContext(null);
// function to change value
export const AuthProvider = ({ children }) => {
    //state that will set the value initially set to null
    const [user, setUser] = useState(null);
    useEffect(() => {
        sessionStorage.getItem("Auth Token") ? setUser(user) : setUser(null);
    }, [user]);



    return ( //wrapping the child components 
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};
   //import this where i want to change the value (eg. sign in)
export const useAuth = () => {
    return useContext(AuthContext);
};


//If i would like to use some where i would 
// 1. import it (eg. import useAuth from "./auth.js")
// 2. assign it to a variable (eg. const )

//
//
//

//     const login = (user) => {
//         // change value to user  (this is changed by calling the function)
//         setUser(user);
//     };
//     const logout = () => {
//         // change value to null (this is changed by calling the function)
//         setUser(null);
//     };