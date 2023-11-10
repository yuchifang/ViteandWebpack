import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPageRoute from './MainPageRoute';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import XlsxPageRoute from './XlsxPage';
import IMGRoute from './IMGRoute';

const router = createBrowserRouter([
  MainPageRoute,
  //@ts-ignore
  XlsxPageRoute,
  IMGRoute
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
