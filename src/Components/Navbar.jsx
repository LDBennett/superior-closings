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

  return(
    <>
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
            to="who-we-are"
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
            onClick={()=>setShow(true)}>FAQs</Link>
        </Nav>
        <Button className="ml-auto" variant="outline-light">View My Docs</Button>
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
