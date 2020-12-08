import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CustomModal from './CustomModal'

import Mask from './../Assets/surgical-mask.jpg'

const CovidUpdate = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <span
      className="covid-update fa-layers fa-fw fa-4x animate__animated animate__pulse animate__repeat-3"
      onClick={()=>setShow(true)}>
        <FontAwesomeIcon icon="circle" color="green" />
        <FontAwesomeIcon icon="disease" inverse transform="shrink-6" />
      </span>
      <CustomModal show={show} handler={setShow} size="lg">
        <h2 class="text-center">COVID-19 Update</h2>
        <Row>
          <Col xs={12} md={4}>
            <Image className="" src={Mask} alt="surgical mask by Dimitri Karastelev" fluid rounded/>
          </Col>
          <Col xs={12} md={8}>
            <p>We take the health and safety of our employees and clients very seriously. During this challenging time of the coronavirus crisis we have taken the proper steps to modify our business model to protect our employees and clients. We continue to remain open to best serve our clients and we will continue to modify our business to follow the direction of the U.S. Centers for Disease Control and Prevention (CDC). </p>
            <p>We have many remote and virtual options for closings for all of our clients and we encourage them to take advantage of these options. If we do need to meet in person for signing or closing we also offer a variety of options to make all clients feel comfortable and safe. Please contact us to discuss all of these options for a safe and contactless closing. 
            </p>
          </Col>
        </Row>
      </CustomModal>
    </>
  )
}

export default CovidUpdate
