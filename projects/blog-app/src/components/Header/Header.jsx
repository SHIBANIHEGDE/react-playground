import React from "react";
import { Container } from "../index";
import Logout from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  return <div>Header</div>;
};

export default Header;
