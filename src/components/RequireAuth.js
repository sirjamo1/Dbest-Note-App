
// import React, {useState} from 'react'
// import { Navigate } from 'react-router-dom'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { useLocation } from 'react-router-dom'


// export const RequireAuth = ({children}) => {
//  const location = useLocation()
//  const [user, setUser] = useState(null);
//  const auth = getAuth();
//  onAuthStateChanged(auth, (user) => {
//      setUser(user);
//  });
// //  const auth = useAuth()
// console.log(user)
//  if(user == null) {
// return <Navigate to="/signup"  />
// }
//   return (
//     children
//   )
// }

// //state={{ path: location.pathname }}
// //this links to auth.js 
