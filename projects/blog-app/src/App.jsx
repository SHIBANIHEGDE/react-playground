import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/AuthService";
import { login, logout } from "./store/authSlice";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((response) => {
        if (response.success) {
          dispatch(login({ userData: response.data }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading}? <>Done loading</> : <div>Loading</div>
    </>
  );
}

export default App;
