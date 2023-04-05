import {NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
const Navbar =()=> {
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div className="navbar-nav">
      
        <NavDropdown title="Root of Equation" id="nav-dropdown" fontSize="30">
          <div><NavLink to="/" >Bisection</NavLink></div>
          <div><NavLink to="/False_Position">False Position</NavLink></div>
          <div><NavLink to="/One_Point_interation">One Point interation</NavLink></div>
          <div><NavLink to="/Taylor_Series">Taylor Series</NavLink></div>
          <div><NavLink to="/Newton_Raphson">Newton Raphson</NavLink></div>
          <div><NavLink to="/Secant">Secant Method</NavLink></div>
        </NavDropdown>

        <NavDropdown title="Linear Algebra" id="nav-dropdown" fontSize="30">
        <div><NavLink to="/Carmer">Carmer</NavLink></div>
        <div><NavLink to="/Test">Test</NavLink></div>
        </NavDropdown>
      
      </div>
    </div>
  </div>
</nav>

    );
}
export default Navbar