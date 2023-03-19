import React from 'react';
import ReactDOM from 'react-dom/client';
import Bisection from './unit1/Bisection';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './hub/Navbar'
import Taylor_Series from './unit1/Taylor_Series'
import False_Position from './unit1/False_Position';
import Newton_Raphson from './unit1/Newton_Raphson'
import One_Point_Iteration from './unit1/One_Point_interation';
import Secant from './unit1/Secant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Secant/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
