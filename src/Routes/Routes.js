import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/Reviews/MyReviews";
import ServiceReviews from "../Pages/Reviews/ServiceReviews";
import AddService from "../Pages/Services/AddService";
import AllService from "../Pages/Services/AllService";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import Login from "../User/Login";
import Register from "../User/Register";
import PrivateRoute from "./PrivateRoute";

 const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/services',element:<Services></Services>},
        {path:'/reviews',element:<ServiceReviews></ServiceReviews>},
        {path:'/allservices',
        loader:async()=>fetch('http://localhost:5000/services'),
        element:<AllService></AllService>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/serviceDetails/:id',
        loader:async({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element:<ServiceDetails></ServiceDetails>
        },
        {path:'/myreviews',element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/addService',element:<PrivateRoute><AddService></AddService></PrivateRoute>}
    ]
    }
])

export default router