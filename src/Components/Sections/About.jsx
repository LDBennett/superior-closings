import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import { Slide, Fade } from "react-awesome-reveal"

import Marino from './../../Assets/marino.jpg'

const About = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return(
    <>
    <Row id="about" className="light-section text-center my-5">
      <Col xs={12}>
        <Slide triggerOnce><h2>About</h2></Slide>
      </Col>
      <Col xs={12}>
        <Image src={Marino} fluid rounded onClick={handleShow}/>
        <h3 className="about__name mx-auto">Marino Harris</h3>
      </Col>
    </Row>
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="p-0 pr-1 border-0" closeButton/>
      <Modal.Body>
        <h2>Marino R. Harris, President</h2>
        <p>With over 18 years of experience in the real estate industry, I understand the needs of buyers, sellers and the real estate professionals we work with, and my staff and I are dedicated to delivering a stress free and smooth closing process.  I am a Pittsburgh native and I understand our ever changing real estate market.  As demands change in our real estate market we promise to be at the forefront of our industry delivering the most secure, advanced and streamlined closing services.  </p>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default About
