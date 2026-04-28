import React from "react";
import authService from "../../../appwrite";
import { useDispatch } from "react-redux";
import { logout } from "./store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const response = await authService.logout();
    if (response.success) {
      dispatch(logout());
    } else {
      console.log("Could not log out the user");
    }
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
