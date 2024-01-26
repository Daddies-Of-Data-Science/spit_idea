import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SocialMedia from './components/SocialMedia/SocialMedia';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Streamlit from './components/streamlit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/network",
    element: <SocialMedia/>,
  },
  {
    path: "/stream",
    element: <Streamlit/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
