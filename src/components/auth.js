import {useState, createContext, useContext} from "react"

const AuthContext = createContext(null) 

export const AuthProvider = ({children}) => {
 const [userLog, setUserLog] = useState(null)

 const login = user => {
  setUserLog(user)
 }
 const logout = () => {
  setUserLog(null)
 }

 return ( <AuthContext.Provider value={{userLog, login, logout}}>{children}</AuthContext.Provider>
 )
}

export const useAuth = () => {
 return useContext(AuthContext)
}