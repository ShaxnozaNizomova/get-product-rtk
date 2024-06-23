import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router";
import Create from "./pages/create/Create";
import Single from "./pages/single/Single";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createProduct" element={<Create />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
};

export default App;
