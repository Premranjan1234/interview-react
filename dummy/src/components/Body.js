import React, { useEffect } from 'react'
import Homepage from './Homepage';
//import Header from './Header'
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import {RouterProvider} from "react-router-dom";
import Login from './Login';
//import UserTable from './UserTable';
import UsertableParent from './UsertableParent';





const Body = () => {
  
  
  
  
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
       path:"/homepage",
       element:<Homepage/>
    },
    {
        path:"/usertable",
        element:<UsertableParent/>
    },

    
    
    
    

  ])
  return (
    <div>
        
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body