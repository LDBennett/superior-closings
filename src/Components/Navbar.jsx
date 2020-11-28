// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Logo from './../Assets/superior-closing-logo--icon-only.png'

const Navigation = () => {

  return(
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="p-4" >
      <Navbar.Brand>
        <img
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top mr-2"
        alt="Superior Closings Icon"/>
        Superior Closings
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link
            className="nav-link"
            role="button"
            activeClass="active"
            to="summary"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Summary</Link>
          <Link
            className="nav-link"
            role="button"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Who We Are</Link>
          <Link
            className="nav-link"
            role="button"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Services</Link>
          <Link
            className="nav-link"
            role="button"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>About</Link>
          <Link
            className="nav-link"
            role="button"
            activeClass="active"
            to="faqs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>FAQs</Link>
        </Nav>
        <Button className="ml-auto" variant="outline-light">View My Docs</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
