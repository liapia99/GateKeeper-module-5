import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Auth/Signup";
import Post from "./Pages/Post";

function App() {
  return (
    <div>
      <nav className="nav">
        <Link to="/">GateKeeper</Link>

        <Link to="/about">About</Link>

        <Link to="/post">Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
