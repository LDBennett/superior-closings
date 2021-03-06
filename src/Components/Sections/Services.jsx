import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Slide, Fade } from "react-awesome-reveal"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Suburbs from './../../Assets/suburbs.jpg'


const Services = () => {


  return(
    <Row id="services" className="section dark-section">
      <Col xs={12}>
        <Slide triggerOnce><h2>Services</h2></Slide>
      </Col>
      <Col xs={12} md={{span: 5 , order: 2}} className="align-self-center">
        <Fade triggerOnce><Image src={Suburbs} className="my-2" alt="Suburbs by Richard Horne" fluid rounded/></Fade>
      </Col>
      <Col xs={12} md={{span: 7, order: 1}}>
        <ListGroup className="services__list text-center" variant="flush">
          <Slide triggerOnce cascade>
            <ListGroup.Item as="div" action className="my-1">Residential Purchases and Refinances</ListGroup.Item>
            <ListGroup.Item as="div" action className="my-1">Commercial Purchases and Refinances</ListGroup.Item>
            <ListGroup.Item as="div" action className="my-1">Foreclosure sales</ListGroup.Item>
            <ListGroup.Item as="div" action className="my-1">Lot or Vacant land sales</ListGroup.Item>
            <ListGroup.Item as="div" action className="my-1">Construction Loans</ListGroup.Item>
          </Slide>
          <Fade><em>*No Real Estate Agents, no problem, we can assist with for sale by owner as well*</em></Fade>
        </ListGroup>
      </Col>
      <Col xs={{span: 12, order: 3}} className="text-center">
        <Fade triggerOnce cascade>
          <FontAwesomeIcon icon="door-open" size="7x" className="my-4"/>
          <p>We are a full service title company operating in the Greater Pittsburgh area offering owners and lenders title insurance policies for all transactions.</p>
          <p>Questions regarding title insurance? <a href="https://www.oldrepublictitle.com/homeowners" target="_blank" rel="noreferrer">Click Here</a></p>
          <p>Need a quote for closing costs? <Button variant="link" className="get-qualia-quote" onClick={(e)=>e.preventDefault()}>Click Here</Button></p>
          <p><FontAwesomeIcon icon="lock" pull="left" /> We take cyber security seriously and protecting our customers private information is a top priority.  We are taking full advantage of technology to collect and deliver personal information during the process. This information is not shared and stored securley.</p>
        </Fade>
      </Col>
    </Row>
  )
}

export default Services
