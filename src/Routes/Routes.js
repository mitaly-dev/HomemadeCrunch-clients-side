import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Services from "../Pages/AddServices/Services";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/MyReviews/Reviews";

export const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:"/home",element:<Home></Home>},
        {path:'/services',element:<Services></Services>},
        {path:'/reviews',element:<Reviews></Reviews>}
    ]
    }
])