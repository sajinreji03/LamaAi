import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './routes/dashboardPage/DashboardPage';
import Chatpage from './routes/chatPage/ChatPage';
import Homepage from './routes/homepage/Homepage';
import RootLayout from './layouts/rootLayout/RootLayout';
import SignInPage from './routes/signInPage/signInPage';
import SignUpPage from "./routes/signUpPage/signUpPage";
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
const router = createBrowserRouter([
  {
   element:<RootLayout/>,
     children: [
    {
      path:"/",
      element:<Homepage/>,
    },
    {
      path: "/sign-in/*",
      element: <SignInPage />,
    },
    {
      path: "/sign-up/*",
      element: <SignUpPage/>,
    },
    {
      element:<DashboardLayout/>,
      children:[
        {
          path:"/dashboard",
          element:<DashboardPage/>
        },
        {
          path:"/dashboard/chats/:id",
          element:<Chatpage />,
        },
      ],
    },
   ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
