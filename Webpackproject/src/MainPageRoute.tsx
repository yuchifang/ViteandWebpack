import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorElement';
import moment from "moment";

function MainPage() {
  console.log(moment("20111031", "YYYYMMDD").fromNow())
  return (
    <div >
      <Link style={{ padding: "10px" }} to="/xlsx">XlsxPage</Link>
      <Link to="/dayjs">DayJS</Link>
    </div>
  );
}

export default {
  path: "/",
  element: <MainPage />,
  errorElement: <ErrorPage />
};
