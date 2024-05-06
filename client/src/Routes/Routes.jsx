import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AddCard from "../pages/AddCard";
import MyCard from "../pages/MyCard";
import Login from "../pages/Login";
import Register from "../pages/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/addCard',
            element: <AddCard></AddCard>,
        },
        {
            path:'/myCard',
            element: <MyCard></MyCard>,
        },
        {
            path:'/login',
            element: <Login></Login>,
        },
        {
            path:'/register',
            element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;