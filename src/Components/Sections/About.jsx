import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Slide } from "react-awesome-reveal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CustomModal from './../CustomModal'

import Marino from './../../Assets/2024/resized/Marino.jpg'
import David from './../../Assets/2024/Dave.jpg'
import Julia from './../../Assets/2024/Julia.jpg'
import Alejandro from './../../Assets/2024/Alejandro.jpg'
import Christie from './../../Assets/stump_christie--resized.jpg'
import Eric from './../../Assets/snyder_eric--resized.jpg'
import Kelli from './../../Assets/2024/Kelly.jpg'
import Emily from './../../Assets/2024/Emily.jpg';
import Gabby from './../../Assets/2024/Gabby.jpg';
import Lauren from './../../Assets/2024/Lauren.jpg'

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
      email: "Marino@superiorclosings.com"
    },
    {
      id:     2,
      name:   "David Tintori",
      title:  "Processing Manager",
      image:    David,
      bio:    "",
      active: true,
      email: "David@superiorclosings.com"
    },
    {
      id:     3,
      name:   "Julia Robb",
      title:  "Lead Processor",
      image:    Julia,
      bio:    "",
      active: true,
      email: "Julia@superiorclosings.com"
    },
    {
      id:     4,
      name:   "Alejandro Diaz",
      title:  "Closing Officer",
      image:   Alejandro,
      bio:    "",
      active: true,
      email: "Alejandro@superiorclosings.com"
    },
    {
      id:     5,
      name:   "Christie Stump",
      title:  "VP of Operations",
      image:   Christie,
      bio:    "",
      active: true,
      email: "Christie@superiorclosings.com"
    },
    {
      id:     6,
      name:   "Eric Snyder",
      title:  "Lead Processor",
      image:   Eric,
      bio:    "",
      active: true,
      email: "Eric@superiorclosings.com"
    },
    {
      id:     7,
      name:   "Kelli Didden",
      title:  "Lead Processor",
      image:   Kelli,
      bio:    "",
      active: true,
      email: "Kelli@superiorclosings.com"
    },
    {
      id:     8,
      name:   "Emily Fullerton Esq.",
      title:  "Chief Legal Counsel",
      image:   Emily,
      bio:    "",
      active: true,
      email: "Emily@superiorclosings.com"
    },
    {
      id:     9,
      name:   "Gabrielle Moore",
      title:  "Post Closing Manager",
      image:   Gabby,
      bio:    "",
      active: true,
      email: "Gabrielle@superiorclosings.com"
    },
    {
      id:     10,
      name:   "Lauren Wurzbacher",
      title:  "Lead Processor",
      image: Lauren,
      bio:    "",
      active: true,
      email: "Lauren@superiorclosings.com"
    },
    
  ]

  const setModal = ( info ) => {
    setShow(true)
    setModalInfo(info)
  }

  const listStaff = staffInfo.map((member, key) => (
    <Col xs={12} sm={6} md={4} lg={3} key={key}>
      <div className="about__image-container d-flex align-items-end rounded">
        <Image src={member.image} fluid className={`about__image d-block mx-auto`}/>
      </div>
      <div className="about__email text-center mt-2 mb-3">
        <span className="ml-2 font-weight-bold">{member.name}</span>
        <small className="d-block font-weight-light font-italic">{member.title}</small>
        <a href={`mailto:${member.email}`}><FontAwesomeIcon icon="envelope" color="#062348" /></a>
        {member.bio && <FontAwesomeIcon icon="info-circle" color="#062348" className="ml-3 cursor-pointer" onClick={() =>setModal(member)}/> }
      </div>
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
        <div className="about__email text-center mt-2 mb-3">
          <FontAwesomeIcon icon="envelope" color="#062348" /><span className="ml-2 font-weight-bold">{modalInfo.email}</span>
        </div>
      </CustomModal>
    }
    </>
  )
}

export default About
