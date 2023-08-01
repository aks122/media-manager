import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import SignUp from "../Auth/Signup";
import Login from "../Auth/Login";
import Home from "../Pages/Home";
import { useSelector } from "react-redux";
import PublicHome from "../Pages/PublicHome";
import Folder from "../Components/Folder";
import Webpage from "../Pages/Webpage";
import Forget from "../Auth/Forget";
const PublicRouting = ({ token }) => {
  if (token !== null) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};
const PrivateRouting = ({ token }) => {
  if (token == null) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
const Routing = () => {
  const selector = useSelector((state) => state.LoginSlice.data);
  const auth = selector;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRouting token={auth} />}>
            <Route path="/" element={<Webpage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<Forget />} />
          </Route>
          <Route element={<PrivateRouting token={auth} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/:folderName" element={<Folder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
