import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar/Navbar";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Notes } from "./components/Notes/Notes";
import { NoMatch } from "./components/NoMatch";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";

export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notes" element={<Notes />}>
          <Route path=":note" element={<Notes />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}
