import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "../pages/index";
import Home from "../pages/Home";
import Profile from "../pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id_user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
