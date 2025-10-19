import { createBrowserRouter } from "react-router";
import Homelayout from "../Homelayout";
import Home from "../pages/Home";
import Category from "../pages/Category";


export const router = createBrowserRouter([
    {
        path:"/",
     Component:Homelayout,
     children:[
        {
            path:"",
            element:<Home></Home>
        },
        {
            path:"category/:id",
            element:<Category></Category>,
            loader: ()=>fetch("/news.json")
        },
     ]
    },
   
    
    
])