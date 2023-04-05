import './App.css';
import Navbar from './hub/Navbar'
import Bisection from './unit1/Bisection';
import False_Position from './unit1/False_Position'
import One_Point_interation from './unit1/One_Point_interation'
import Taylor_Series from './unit1/Taylor_Series'
import Newton_Raphson from './unit1/Newton_Raphson'
import Secant from './unit1/Secant'
import Carmer from './unit2/Carmer'
import Test from './unit2/Test'
import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Bisection/>}/>
    <Route path='/False_Position' element={<False_Position/>}/>
    <Route path='/One_Point_interation' element={<One_Point_interation/>}/>
    <Route path='/Taylor_Series' element={<Taylor_Series/>}/>
    <Route path='/Newton_Raphson' element={<Newton_Raphson/>}/>
    <Route path='/Secant' element={<Secant/>}/>
    <Route path='/Carmer' element={<Carmer/>}/>
    <Route path='/Test' element={<Test/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
