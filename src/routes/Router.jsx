import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Erropage from "../pages/Erropage";
import ProfileDetails from "../pages/ProfileDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,  
    children: [
        {
            path: "/", 
            element: <Home/>, 
        },
        {
          path: "/timeline", 
          element: <Timeline/> 
        }, 
        {
          path: "/usersDetails/:id",
          element: <ProfileDetails/>, 
          loader: ()=> fetch("/friendsData.json"), 
        }
      
    ],
    errorElement: <Erropage/>
  }
]);