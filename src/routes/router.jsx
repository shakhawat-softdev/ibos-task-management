import Main from "../layoutes/Main";
import Chat from "../pages/Home/Chat";
import Home from "../pages/Home/Home/Home";
import Profile from "../pages/Home/Profile";
import Settings from "../pages/Home/Settings";
import Tasks from "../pages/Home/Tasks";
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
         },
         {
            index: true,
            element: <Tasks />,
         },
         {
            path: '/chat',
            element: <Chat />,
         },
         {
            path: '/settings',
            element: <Settings />,
         },
         {
            path: '/profile',
            element: <Profile />,
         },
      ]
   }
]);