import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorElement';

function MainPage() {
  return (
    <div >
      <Link style={{ padding: "10px" }} to="/xlsx">XlsxPage</Link>
      <Link to="/dayjs">DayJS</Link>
      <Link style={{ padding: "10px" }} to="/img">IMG</Link>
      <Link to="/vite">Vite</Link>
      <Link style={{ padding: "10px" }} to="/vite/commonJS">Vite CommonJS</Link>
    </div>
  );
}

export default {
  path: "/",
  element: <MainPage />,
  errorElement: <ErrorPage />
};
