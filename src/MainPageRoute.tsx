import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <div >
      <Link to="/xlsx">XlsxPage</Link>
    </div>
  );
}

export default {
  path: "/",
  element: <MainPage />,
};
