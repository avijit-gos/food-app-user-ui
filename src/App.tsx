/** @format */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

import Home from "./Pages/Home/Home";
import RegisterModal from "./Components/Modal/RegisterModal";
import LoginModal from "./Components/Modal/LoginModal";
import Location from "./Pages/Location/Location";
import Food from "./Pages/Food/Food";
import CartDrawer from "./Components/CartDrawer/CartDrawer";
import FoodLinkingModal from "./Components/Modal/FoodLinkingModal";

function App() {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <CartDrawer />
      <FoodLinkingModal />
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/locations' element={<Location />} />
          <Route path='/food/:id' element={<Food />} />
        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
