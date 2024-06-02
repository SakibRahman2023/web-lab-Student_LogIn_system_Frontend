import { createBrowserRouter } from "react-router-dom";
import Home from "../components-/Home";
import Main from "../LayOut-/Main";
import Register from "../components-/Register";
import Login from "../components-/Login";
import AboutRmstu from "../components-/AboutRmstu";
import Cse from "../components-/Cse";
import MyProfile from "../components-/MyProfile";







const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/aboutRmstu',
                element:<AboutRmstu></AboutRmstu>
            },
            {
                path:'/cse',
                element:<Cse></Cse>
            },
            {
                path:'/profile',
                element:<MyProfile></MyProfile>
            }
        ]
    }
]);

export default router;