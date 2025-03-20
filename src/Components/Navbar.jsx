import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll"
import useScrollPosition from '@react-hook/window-scroll'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Document, Page } from 'react-pdf';

import CustomModal from './CustomModal'
import useWindowSize from './Utils/useWindowSize'

import Logo from './../Assets/superior-closing-logo--icon-only.png'
import TitleFlyer from './../Assets/title flyer.pdf'
import MovingTips from './../Assets/p68 Moving Tips.pdf'
import HomeBuyingProcess from './../Assets/p52 Home Buying Process.pdf'
import WireFraud from './../Assets/p41 Wire Fraud.pdf'

const Navigation = () => {

  const size = useWindowSize()

  const [ faqs, setFaqs ] = useState(false)
  const [ resources, setResources ] = useState(false)
  const [ resourcesPDF, setResourcesPDF ] = useState(TitleFlyer)
  const [ resourcesWidth, setResourcesWidth ] = useState()
  const [ miniNav, setMiniNav ] = useState(false)
  const [ expandedNav, setExpandedNav ] = useState(false)
  const scrollY = useScrollPosition()


  const NavLink = ({to, children}) => {
    return (
      <Link
        className="nav-link"
        to={to}
        role="button"
        activeClass="active"
        spy={true}
        smooth='easeInOutQuint'
        offset={-50}
        duration={800}
        onClick={handleNavClick}>{children}</Link> )
  }

  useEffect(()=>{
    if (scrollY > 1){
      setMiniNav(true)
    }
    else{
      setMiniNav(false)
    }
  },[scrollY])

  const handleNavClick = () => {
    setExpandedNav(!expandedNav)
  }

  useEffect(()=>{
    if( size.width < 380){
      setResourcesWidth(250)
    }
    else if( size.width < 992 ){
      setResourcesWidth(300)
    }
    else{
      setResourcesWidth(null)
    }
  },[ size ])

  const changeResource = (e) => {
    const pdf = e.target.getAttribute('data-pdf')
    switch(pdf) {
      case 'title':
        setResourcesPDF(TitleFlyer)
        break;
      case 'wire':
        setResourcesPDF(WireFraud)
        break;
      case 'moving':
        setResourcesPDF(MovingTips)
        break;
      case 'home-buying':
      default:
        setResourcesPDF(HomeBuyingProcess)
    }
  }

  return(
    <>
    <Navbar expanded={expandedNav} onToggle={handleNavClick} bg="dark" variant="dark" expand="lg" fixed="top" className={`${miniNav ? 'minified' : ''} p-3`} >
      <Navbar.Brand>
        <img
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top mr-2"
        alt="Superior Closings Icon"/>
        <span className="navbar-brand__text">Superior Closing Services</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav b-0" />
      <Navbar.Collapse className="pb-2 pb-lg-0" id="basic-navbar-nav">
        <Nav>
          <NavLink to="who-we-are">Who We Are</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="about">About</NavLink>
          <span
            className="nav-link"
            role="button"
            onClick={()=>setFaqs(true)}>FAQs</span>
          <span
            className="nav-link"
            role="button"
            onClick={()=>setResources(true)}>Resources</span>
        </Nav>
          <a href="mailto:info@superiorclosings.com" className="ml-auto mr-3"><FontAwesomeIcon icon="envelope" color="#f86124"/></a>
        <a href="tel:1-412-505-5199" className="mr-3"><FontAwesomeIcon icon="phone" color="#f86124"/></a>
      </Navbar.Collapse>
    </Navbar>
    <CustomModal show={faqs} handler={setFaqs} size="lg">
        <h3 className="text-center ">What Do I Need For Closing?</h3>
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
    <CustomModal show={resources} handler={setResources} size="lg">
        <h3 className="text-center">Resources</h3>
        <hr/>
        <Row className="justify-content-center">
          <ButtonGroup size={size.width < 991 ? "sm" : "md"} vertical={size.width < 460 ? true : false}>
            <Button onClick={changeResource} data-pdf="title">Title Flyer</Button>
            <Button onClick={changeResource} data-pdf="wire">Wire Fraud</Button>
            <Button onClick={changeResource} data-pdf="home-buying">Home Buying Process</Button>
            <Button onClick={changeResource} data-pdf="moving">Moving Tips</Button>
          </ButtonGroup>
        </Row>
        <hr className="mx-5"/>
        <Row className="justify-content-center" style={{minHeight: resourcesWidth >= 250 ? "400px" : "800px"}}>
          <Document file={resourcesPDF} >
            <Page pageNumber={1} width={resourcesWidth}/>
          </Document>
        </Row>
        <Row className="justify-content-center">
          <Button className="justify-self-center" href={resourcesPDF} variant="outline-light" download>Download</Button>
        </Row>
    </CustomModal>
    </>
  )
}

export default Navigation
