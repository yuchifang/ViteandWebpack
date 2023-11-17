import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPageRoute from './MainPageRoute';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import XlsxPageRoute from './XlsxPage';
import DayJSRoute from './DayJSRoute';
import IMGRoute from "./IMGRoute"
import ViteRoute from "./ViteRoute"

const router = createBrowserRouter([
  MainPageRoute,
  XlsxPageRoute,
  DayJSRoute,
  IMGRoute,
  ViteRoute

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
