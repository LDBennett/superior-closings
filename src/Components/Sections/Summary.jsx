import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Slide } from "react-awesome-reveal";
import Logo from './../../Assets/superior-closing-logo--icon-only.png'

const Summary = () => {

  return(
    <Row id="summary" className="dark-section text-center justify-content-center py-5">
      <Col xs={12} md={4}>
        <Slide triggerOnce><Image src={Logo} className="mb-4" alt="Superior Closings Icon" fluid/></Slide>
      </Col>
      <Col xs={12} md={8}>
        <div className="text-md-left">
          <Slide triggerOnce cascade>
            <h2>Our Mission Statement</h2>
            <p>Our goal is to deliver the highest quality of service to our clients and their customers.  We guarantee that all parties involved in the transaction will have an exceptional experience.</p>
          </Slide>
        </div>
      </Col>
    </Row>
  )
}

export default Summary
