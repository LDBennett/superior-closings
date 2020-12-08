// import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react'

import { Link } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CustomModal from './CustomModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from './../Assets/superior-closing-logo--icon-only.png'

const Navigation = () => {

  const [show, setShow] = useState(false)

  const NavLink = ({to, children}) => {
    return (
      <Link
        className="nav-link"
        to={to}
        role="button"
        activeClass="active"
        spy={true}
        smooth='easeInOutQuint'
        offset={-70}
        duration={800}>{children}</Link> )
  }

  return(
    <>
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top" className="p-4" >
      <Navbar.Brand>
        <img
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top mr-2"
        alt="Superior Closings Icon"/>
        Superior Closing Services
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink to="summary">Summary</NavLink>
          <NavLink to="who-we-are">Who We Are</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="about">About</NavLink>
          <span
            className="nav-link"
            role="button"
            onClick={()=>setShow(true)}>FAQs</span>
        </Nav>
        <Button className="ml-auto" variant="outline-light" href="https://login.e-closingsecured.com/CompanyID/3Z9DNFED6Y" target="_blank">View My Docs</Button>
      </Navbar.Collapse>
    </Navbar>
    <CustomModal show={show} handler={setShow}>
        <h3 className="text-center">What Do I Need For Closing?</h3>
        <hr/>
        <Row>
          <Col xs={12} sm={6}>
            <h5 className="text-center">Buyer</h5>
            <ListGroup variant="flush" >
              <ListGroup.Item><FontAwesomeIcon icon="check-circle" color="#f86124"/> Valid Photo ID </ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon="check-circle" color="#f86124"/> Cashiers Check made payable to Superior Closing Services for you downpayment/closing costs. If you already sent a wire transfer for this amount this is not required.</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon="check-circle" color="#f86124"/> Any additional documentation your lender requires you to bring to closing</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={6}>
            <h5 className="text-center">Seller</h5>
            <ListGroup variant="flush">
              <ListGroup.Item><FontAwesomeIcon icon="check-circle" color="#f86124"/> Valid photo identification</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon="check-circle" color="#f86124"/> Keys and Garage door openers</ListGroup.Item>
              <ListGroup.Item><FontAwesomeIcon icon="check-circle" color="#f86124"/> Forwarding address</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
    </CustomModal>
    </>
  )
}

export default Navigation
