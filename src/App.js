import "./App.css";

import Navbar from "./components/Navbar";

import Login from "./components/Login/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginMainPage from "./components/LoginMain/LoginMain";

import { AppContext } from "./components/Context";

import { useContext } from "react";

import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  const { isLogged } = useContext(AppContext);

  return (
    <div className="mainpage">
      <BrowserRouter>
        {isLogged ? <Navbar /> : ""}

        <Routes>
          <Route index element={<Login />}></Route>

          <Route path="/" element={<Login />}></Route>

          <Route path="/login" element={<LoginMainPage />}></Route>

          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
