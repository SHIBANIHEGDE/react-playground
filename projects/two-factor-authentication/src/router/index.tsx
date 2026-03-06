import {
  createBrowserRouter,
 
} from "react-router";
import App from "../App.tsx";
import Register from "../components/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
    {
      path: "/",
      Component: Register,
     },
     {
      path: "/register",
      Component: Register,
     }
    ]
  },
 
]);

export default router;

