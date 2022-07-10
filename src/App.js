import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import { Navbar } from "./components/NavBar/Navbar";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Notes } from "./components/Notes/Notes";
import { Profile } from "./components/Profile/Profile";
import { NoMatch } from "./components/NoMatch";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Users } from "./Users/Users";
import { Admin } from "./components/Admin";
import { UserDetails } from "./Users/UserDetails";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import backgroundImg from "../src/components/images/paperBackground.png";

export default function App() {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
    return (
        <AuthProvider>
            <main
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover",
                    height: "100vh"
                }}
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route
                        path={"notes"}
                        element={user ? <Notes /> : <Login />}
                    >
                        <Route path=":note" element={<Notes />} />
                    </Route>
                    <Route
                        path="profile"
                        element={user ? <Profile /> : <Login />}
                    />

                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                    <Route path="users" element={<Users />}>
                        <Route path=":userId" element={<UserDetails />} />
                        <Route path="admin" element={<Admin />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </main>
        </AuthProvider>
    );
}


