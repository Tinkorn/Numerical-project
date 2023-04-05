import {NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
const Navbar =()=> {
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div class="navbar-nav">
      
        <NavDropdown title="Root of Equation" id="nav-dropdown" font-size="30">
        <NavDropdown.Item class="nav-link active" aria-current="page"> <NavLink to="/">Bisection</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page" > <NavLink to="/False_Position">False Position</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page" > <NavLink to="/One_Point_interation">One Point interation</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page" > <NavLink to="/Taylor_Series">Taylor Series</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page" > <NavLink to="/Newton_Raphson">Newton Raphson</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page" > <NavLink to="/Secant">Secant Method</NavLink></NavDropdown.Item>
        </NavDropdown>

        
        <NavDropdown title="Linear Algebra" id="nav-dropdown" font-size="30">
        <NavDropdown.Item class="nav-link active" aria-current="page"> <NavLink to="/">Bisection</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page"> <NavLink to="/False_Position">False Position</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page"> <NavLink to="/One_Point_interation">One Point interation</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page"> <NavLink to="/Taylor_Series">Taylor Series</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page"> <NavLink to="/Newton_Raphson">Newton Raphson</NavLink></NavDropdown.Item>
        <NavDropdown.Item class="nav-link active" aria-current="page"> <NavLink to="/Secant">Secant Method</NavLink></NavDropdown.Item>
        </NavDropdown>
      
      </div>
    </div>
  </div>
</nav>

    );
}
export default Navbar