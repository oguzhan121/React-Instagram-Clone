import PrivateRoute from "./components/PrivateRoute";
import AuthLayaout from "./pages/Auth";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Home from "./pages/Home";

const routes = [
    {
        path:'/',
        element:<Home />,
        auth:true 
    },
    {
        path:'/auth',
        element:<AuthLayaout />,
        children :[
            {
                path:'login',
                element:<Login />
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayaout />,
        children :[
            {
                path:'register',
                element:<Register />
            }
        ]
    },
]

const authCheck = routes => routes.map(route => {
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = authCheck(route.children);
    }
    return route
})

export default authCheck(routes);