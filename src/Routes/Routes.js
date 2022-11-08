import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/MyReviews/Reviews";
import AllService from "../Pages/Services/AllService";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import Login from "../User/Login";
import Register from "../User/Register";

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
        element:<AllService></AllService>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/serviceDetails/:id',
        loader:async()=>fetch(`http://localhost:5000/services/6369bcd164ad4e49c90849e4`),
        element:<ServiceDetails></ServiceDetails>
    }

    ]
    }
])

export default router