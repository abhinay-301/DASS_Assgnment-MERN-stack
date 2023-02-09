import { Profile } from "./components/Profile";
import Auth from "./components/Auth";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

const ProtectedRoutes = () => {
  //   const isAuth = useAuth();
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  return (username || password) ? <Profile /> : <Auth />;
};

const View = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default View;
