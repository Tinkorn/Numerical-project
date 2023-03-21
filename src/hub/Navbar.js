import {NavDropdown} from 'react-bootstrap'

const Navbar =()=> {
    return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <NavDropdown>
        <NavDropdown.Item class="nav-link active" aria-current="page" href="/Bisection">Bisection</NavDropdown.Item>
        <NavDropdown.Item class="nav-link" href="/False_Position"> False Position</NavDropdown.Item>
        <NavDropdown.Item class="nav-link" href="/One_Point_interation"> Onepoint Iteration</NavDropdown.Item>
        <NavDropdown.Item class="nav-link" href="/Taylor_Series"> Taylor Series</NavDropdown.Item>
        <NavDropdown.Item class="nav-link" href="/Newton_Raphson"> Newton's Raphson</NavDropdown.Item>
        <NavDropdown.Item class="nav-link" href="/Secan"> Secant</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  </div>
</nav>

    );
}
export default Navbar