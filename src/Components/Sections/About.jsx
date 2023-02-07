import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Slide } from "react-awesome-reveal"

import CustomModal from './../CustomModal'

import Marino from './../../Assets/marino.jpg'
import David from './../../Assets/tintori_david.jpg'
import Julia from './../../Assets/robb_julia.jpg'
import Alejandro from './../../Assets/diaz_alejandro.jpg'
import Christie from './../../Assets/stump_christie.jpg'
import Eric from './../../Assets/snyder_eric.jpg'
import Kelli from './../../Assets/didden_kelli.jpg'
import Emily from './../../Assets/fullerton_emily.jpg';

const About = () => {

  const [ show, setShow ] = useState(false)
  const [ modalInfo, setModalInfo ] = useState()

  const staffInfo = [
    {
      id:     1,
      name:   "Marino Harris",
      title:  "President",
      image:  Marino,
      bio:    "With over 18 years of experience in the real estate industry in Pittsburgh, I understand the needs of buyers, sellers and the real estate professionals we work with, and my staff and I are dedicated to delivering a stress free and smooth closing process. I am a Pittsburgh native and I understand our ever changing real estate market. As demands change in our real estate market we promise to be at the forefront of our industry delivering the most secure, advanced and streamlined closing services.",
      active: true,
    },
    {
      id:     2,
      name:   "David Tintori",
      title:  "Processing Manager",
      image:    David,
      bio:    "",
      active: true,
    },
    {
      id:     3,
      name:   "Julia Robb",
      title:  "Lead Processor",
      image:    Julia,
      bio:    "",
      active: true,
    },
    {
      id:     4,
      name:   "Alejandro Diaz",
      title:  "Closing Officer",
      image:   Alejandro,
      bio:    "",
      active: true,
    },
    {
      id:     5,
      name:   "Christie Stump",
      title:  "VP of Operations",
      image:   Christie,
      bio:    "",
      active: true,
    },
    {
      id:     6,
      name:   "Eric Snyder",
      title:  "Lead Processor",
      image:   Eric,
      bio:    "",
      active: true,
    },
    {
      id:     7,
      name:   "Kelli Didden",
      title:  "Lead Processor",
      image:   Kelli,
      bio:    "",
      active: true,
    },
    {
      id:     8,
      name:   "Emily Fullerton Esq.",
      title:  "Chief Legal Counsel",
      image:   Emily,
      bio:    "",
      active: true,
    },
  ]

  const setModal = ( info ) => {
    setShow(true)
    setModalInfo(info)
  }

  const listStaff = staffInfo.map((member, key) => (
    <Col xs={12} sm={6} md={4} lg={3} key={key}>
      <div className="about__image-container d-flex align-items-center mx-auto rounded">
        <Image src={member.image} fluid onClick={() => setModal(member)} />
      </div>
      <h3 className="about__name mx-auto">{member.name}</h3>
    </Col>
  ))

  return(
    <>
    <Row id="about" className="section light-section text-center mb-5 mt-3">
      <Col xs={12}>
        <Slide triggerOnce><h2>About</h2></Slide>
      </Col>
      {listStaff}
    </Row>
    {modalInfo &&
      <CustomModal show={show} handler={setShow}>
        <h2 className="text-center font-weight-bold">{modalInfo.name} <small className="d-block font-weight-light font-italic">{modalInfo.title}</small></h2>
        <Image className="about-photo d-block mx-auto mb-2" src={modalInfo.image} fluid rounded />
        <p className="pt-4 px-5">{modalInfo.bio}</p>
      </CustomModal>
    }
    </>
  )
}

export default About
