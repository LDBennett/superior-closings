import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Slide } from "react-awesome-reveal";

import Group from './../../Assets/closing_photo.jpg'
import Door from './../../Assets/key-door.jpg'


const WhoWeAre = () => {

  return(

    <Row id="who-we-are" className="section light-section my-5">
      <Col xs={12}>
        <Slide triggerOnce><h2>Who We Are</h2></Slide>
      </Col>
      <Col xs={12} md={4}>
        <Slide triggerOnce><Image src={Group} className="my-2" alt="People looking at paperwork on a table by Sebastian Herrmann" fluid rounded/></Slide>
      </Col>
      <Col xs={12} md={8} className="align-self-center">
        <Slide triggerOnce>
          <p>At <strong>Superior Closing Services</strong> we have many years of experience in the industry working within the Western Pennsylvania area, but offer a fresh new outlook on the closing process. We offer a broad variety of services to assist our clients through any closing process. The streamlined process keeps our clients and their customers involved and up to date without overwhelming them. We understand that buying, selling and refinancing can be stressful with many moving parts. The part we control we want to be smooth and stress free. </p>
        </Slide>
      </Col>
      <Col xs={12} md={{span: 4, order: 2}}>
        <Slide triggerOnce><Image src={Door} className="my-2" alt="Handshake photo by Constantin Wenning" fluid rounded/></Slide>
      </Col>
      <Col xs={12} md={{span: 8, order: 1}} className="align-self-center">
        <Slide triggerOnce><p>Our clients include real estate agents, real estate brokers, real estate investors, and loan officers in and around the City of Pittsburgh. We understand that they all have different needs and we carefully cater to each one of them. We take pride in our relationships and foster them to grow and expand their business with their customers. We know the service we offer to the customers of our clients is an extension of them and will help our clients obtain satisfied referrals.</p></Slide>
      </Col>
      <Col xs={12} md={{span: 12, order: 3}} className="align-self-center">
        <Slide triggerOnce><p>We use the industry leader in software <strong>Qualia</strong>. <br/><strong>Qualia</strong> is our secure, online title, escrow, and closing platform and is used by the top title and escrow companies in the country. It empowers us to provide our clients with around the clock real-time updates on the closing process, communicate through a secure mobile app, and provide a document storage portal for our clients to access and e-sign their documents on their own schedules.</p></Slide>
      </Col>
    </Row>
  )
}

export default WhoWeAre
