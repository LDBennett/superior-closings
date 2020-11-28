import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Slide } from "react-awesome-reveal";

import City1 from './../../Assets/pittsburgh1.jpg'
import Handshake from './../../Assets/handshake.jpg'


const WhoWeAre = () => {

  return(

    <Row id="who-we-are" className="light-section my-5">
      <Col xs={12}>
        <Slide triggerOnce><h2>Who We Are</h2></Slide>
      </Col>
      <Col xs={12} md={4}>
        <Slide triggerOnce><Image src={City1} className="my-2" alt="Pittsburgh City by Eilis Garvey" fluid rounded/></Slide>
      </Col>
      <Col xs={12} md={8} className="align-self-center">
        <Slide triggerOnce>
          <p>At <strong>Superior Closing Services</strong> we have many years of experience in the industry, but offer a fresh new outlook on the closing process.  We offer a broad variety of services to assist our clients through any closing process.  The streamlined process keeps our clients and their customers involved and up to date without overwhelming them.  We understand that buying, selling and refinancing can be stressful with many moving parts.  The part we control we want to be smooth and stress free.</p>
        </Slide>
      </Col>
      <Col xs={12} md={{span: 4, order: 2}}>
        <Slide triggerOnce><Image src={Handshake} className="my-2" alt="Handshake photo by Constantin Wenning" fluid rounded/></Slide>
      </Col>
      <Col xs={12} md={{span: 8, order: 1}} className="align-self-center">
        <Slide triggerOnce><p>Our clients include real estate agents and brokers, loan officers and real estate investors.  We understand that they all have different needs and we cater to each of them.  We take pride in these relationships and helping them grow their business with their customers.  The service we offer to the customers of our clients is an extension of them and will help our clients obtain more referrals.</p></Slide>
      </Col>
    </Row>
  )
}

export default WhoWeAre