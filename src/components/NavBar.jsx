import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import { NavLink } from "react-router-dom"
import {Navbar as NavbarB, Container, Nav} from 'react-bootstrap';
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
const {total} = useContext(PizzaContext);
const navbarStyle = ({ isActive }) => isActive ? "nav-item nav-link text-warning" : "nav-item nav-link"

return (
<NavbarB bg="white" data-bs-theme="white" fixed="top" className="shadow-sm p-3 mb-5">
        <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            alt="logo"
            src="src/assets/mammamialg.svg"
            width="100"
            className="d-inline-block align-top"
          />
        </NavLink>
          <Nav className="ms-auto">
          <NavLink to="/" className={navbarStyle}>Home</NavLink>
          <NavLink to="/carrito" className={navbarStyle}><LuShoppingCart /> ${total.toLocaleString("es-CL")}</NavLink>
          </Nav>
        </Container>
      </NavbarB>
  )
}

export default NavBar;
