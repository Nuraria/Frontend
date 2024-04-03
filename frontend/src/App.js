import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./page/Home/Home";
import Composition from "./page/Composition/Composition";
import FirstAdmin from "./page/AdminPage/FirstAdmin/FirstAdmin";
import TwoAdmin from "./page/AdminPage/TwoAdmin/TwoAdmin";
import AutoAdmin from "./page/AdminPage/AutoAdmin/AutoAdmin";
import Auth from "./page/Auth/Auth";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import AuthTwo from "./page/AuthTwo/AuthTwo";
import { UploadPhoto } from "./page/UploadPhoto/UploadPhoto";

const IsAuth = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/composition/:id" element={<Composition />} />
      <Route
        path="/AdminPage/FirstAdmin/:id"
        element={
          <IsAuth isAuth={localStorage.getItem('user')}>
            <FirstAdmin />
          </IsAuth>
        }
      />
      <Route
        path="/AdminPage/TwoAdmin/:id"
        element={
          <IsAuth isAuth={localStorage.getItem('user')}>
            <TwoAdmin />
          </IsAuth>
        }
      />
      <Route
        path="/AdminPage/AutoAdmin/:id"
        element={
          <IsAuth isAuth={localStorage.getItem('user')}>
            <AutoAdmin />
          </IsAuth>
        }
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AuthTwo" element={<AuthTwo />} />
    </Routes>
  );
}

export default App;
