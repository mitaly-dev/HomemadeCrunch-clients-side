import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/MyReviews/Reviews";
import AllService from "../Pages/Services/AllService";
import Services from "../Pages/Services/Services";

 const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/services',element:<Services></Services>},
        {path:'/reviews',element:<Reviews></Reviews>},
        {path:'/allservices',
        loader:async()=>fetch('http://localhost:5000/services'),
        element:<AllService></AllService>}
    ]
    }
])

export default router