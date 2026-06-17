import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Erropage from "../pages/Erropage";

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
      
    ],
    errorElement: <Erropage/>
  }
]);