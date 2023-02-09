// import React from "react";
const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = '/';
}

export default handleLogout;