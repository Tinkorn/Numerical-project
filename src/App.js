import './App.css';
import Navbar from './hub/Navbar'
import Bisection from './unit1/Bisection';
import False_Position from './unit1/False_Position'
import One_Point_interation from './unit1/One_Point_interation'
import Taylor_Series from './unit1/Taylor_Series'
import Newton_Raphson from './unit1/Newton_Raphson'
import Secant from './unit1/Secant'
import { BrowserRouter,Route } from 'react-router-dom';
import Head from './Head';
function App() {
  return (
    
      <BrowserRouter>
      <Head/>
      <main>
      <Bisection/>
      <False_Position/>
      <One_Point_interation/>
      <Taylor_Series/>
      <Newton_Raphson/>
      <Secant/>
      </main>
      </BrowserRouter>
  
  );
}

export default App;
