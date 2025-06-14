/** @format */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

import Home from "./Pages/Home/Home";
import RegisterModal from "./Components/Modal/RegisterModal";
import LoginModal from "./Components/Modal/LoginModal";

function App() {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
