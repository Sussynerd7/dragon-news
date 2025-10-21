import { createBrowserRouter } from "react-router";
import Homelayout from "../Homelayout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Authlayout from "../pages/Authlayout";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Homelayout,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "category/:id",
                element: <Category></Category>,
                loader: () => fetch("/news.json")
            },
           

        ]
    },
     {
                path: "/auth",
                element: <Authlayout></Authlayout>,
                children: [
                    {
                        path: "/auth/login",
                        element: <Login></Login>
                    },
                    {
                        path: "/auth/register",
                        element: <Register></Register>
                    }
                ]
            },



])