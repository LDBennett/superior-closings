import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import { Slide } from "react-awesome-reveal"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Suburbs from './../../Assets/suburbs.jpg'


const Services = () => {


  return(
    <Row id="services" className="dark-section py-5">
      <Slide cascade triggerOnce>
        <Col xs={12}>
          <h2>Services</h2>
        </Col>
        <Col xs={12}>
          <Image src={Suburbs} className="my-2" alt="Suburbs by Richard Horne" fluid rounded/>
        </Col>
        <Col xs={12}>
          <ListGroup className="services__list text-center" variant="flush">
            <ListGroup.Item as="div" action>Residential Purchases and Refinances</ListGroup.Item>
            <ListGroup.Item as="div" action>Commercial Purchases and Refinances</ListGroup.Item>
            <ListGroup.Item as="div" action>Foreclosure sales</ListGroup.Item>
            <ListGroup.Item as="div" action>Lot or Vacant land sales</ListGroup.Item>
            <ListGroup.Item as="div" action>Construction Loans</ListGroup.Item>
            <em>*No Real Estate Agents, no problem, we can assist with for sale by owner as well*</em>
          </ListGroup>
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon="door-open" size="5x" className="my-4"/>
          <p>We are a full service title company offering owners and lenders title insurance policies for all transactions.</p>
          <p>Questions regarding title insurance? <a href="">Click Here</a></p>
          <p>Need a quote for closing costs? <a href="">Click Here</a></p>
          <p><FontAwesomeIcon icon="lock" pull="left" /> We take cyber security seriously and protecting our customers private information is a top priority.  We are taking full advantage of technology to collect and deliver personal information during the process. This information is not shared and stored securley.</p>
        </Col>
      </Slide>
    </Row>
  )
}

export default Services
