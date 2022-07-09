import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import { Navbar } from "./components/NavBar/Navbar";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Notes } from "./components/Notes/Notes";
import { Profile } from "./components/Profile/Profile";
import { NoMatch } from "./components/NoMatch";
//import { LogIn } from "./components/LogIn/LogIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Users } from "./Users/Users";
import { Admin } from "./components/Admin";
import { UserDetails } from "./Users/UserDetails";
import { RequireAuth } from "./components/RequireAuth";

export default function App() {
    return (
        <AuthProvider>
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route
                        path="notes"
                        element={
                            <RequireAuth>
                                <Notes />
                            </RequireAuth>
                        }
                    >
                        <Route path=":note" element={<Notes />} />
                    </Route>
                    <Route
                        path="profile"
                        element={
                            // <RequireAuth>
                            <Profile />
                            // </RequireAuth>
                        }
                    />

                    <Route path="signup" element={<SignUp />} />
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

//
//
//  {/* <Route path="login" element={<LogIn />} /> */}
