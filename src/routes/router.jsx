import Main from "../layoutes/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import SignIn from "../pages/signIn/SignIn";



const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "signin",
            element: <SignIn />
         },
         {
            path: 'login',
            element: <Login />
         }
      ]
   }
]);