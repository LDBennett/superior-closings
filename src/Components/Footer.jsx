import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {


  return(
    <footer className="footer dark-section p-4 m-0 row">
      <ListGroup className="col-12 col-md-6">
        <h5>Title Insurance Underwriters</h5>
        <ListGroup.Item as="a" variant="light" href="https://www.oldrepublictitle.com/" target="_blank">Old Republic Title Insurance</ListGroup.Item>
      </ListGroup>
      <div className="col-12 col-md-6">
        <h5 className="text-center mt-4">Follow Us</h5>
        <div className="d-flex justify-content-center my-3">
          <ButtonGroup aria-label="Social Icon Links">
            <Button variant="secondary"><FontAwesomeIcon icon={['fab', 'facebook']} /></Button>
            <Button variant="secondary"><FontAwesomeIcon icon={['fab', 'twitter']} /></Button>
            <Button variant="secondary"><FontAwesomeIcon icon={['fab', 'youtube']} /></Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="footer__bottom border-top d-flex justify-content-between col-12">
        <span>© Copyright 2020 Superior Closings Services</span>
      </div>
    </footer>
  )
}

export default Footer
