import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Slide } from "react-awesome-reveal"

import CustomModal from './../CustomModal'

import Marino from './../../Assets/marino.jpg'

const About = () => {

  const [show, setShow] = useState(false)

  return(
    <>
    <Row id="about" className="section light-section text-center mb-5 mt-3">
      <Col xs={12}>
        <Slide triggerOnce><h2>About</h2></Slide>
      </Col>
      <Col xs={12}>
        <Image src={Marino} fluid rounded onClick={()=>setShow(true)}/>
        <h3 className="about__name mx-auto">Marino Harris</h3>
      </Col>
    </Row>
    <CustomModal show={show} handler={setShow}>
      <h2 className="text-center">Marino R. Harris, President</h2>
      <Image className="about-photo d-block mx-auto mb-2" src={Marino} fluid rounded/>
      <p>With over 18 years of experience in the real estate industry in Pittsburgh, I understand the needs of buyers, sellers and the real estate professionals we work with, and my staff and I are dedicated to delivering a stress free and smooth closing process. I am a Pittsburgh native and I understand our ever changing real estate market. As demands change in our real estate market we promise to be at the forefront of our industry delivering the most secure, advanced and streamlined closing services. </p>
    </CustomModal>
    </>
  )
}

export default About
