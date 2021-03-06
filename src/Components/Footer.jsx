import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {


  return(
    <footer className="footer dark-section p-4 m-0 row">
      <ListGroup className="col-12 col-md-6 text-center text-md-left mb-4 mb-md-0">
        <h5>Title Insurance Underwriters</h5>
        <ListGroup.Item as="a" variant="light" href="https://www.oldrepublictitle.com/" target="_blank">Old Republic Title Insurance</ListGroup.Item>
      </ListGroup>
      <div className="col-12 col-md-6">
        <h5 className="text-center">Follow</h5>
        <div className="d-flex justify-content-center my-3">
          <ButtonGroup aria-label="Social Icon Links">
            <Button variant="dark" disabled><FontAwesomeIcon icon={['fab', 'facebook']} /></Button>
            <Button variant="dark" href="https://www.instagram.com/superiorclosingservices/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></Button>
            <Button variant="dark" href="https://twitter.com/SuperiorCS_Pgh" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></Button>
          </ButtonGroup>
        </div>
        <h5 className="text-center">Contact</h5>
        <div className="text-center">
          <p className="my-1">PO Box 44129, Pittsburgh, PA 15205</p>
          <p className="my-1"><a href="mailto:Marino@superiorclosings.com">Marino@superiorclosings.com</a></p>
          <p className="my-1"><a href="tel:1-412-505-5199">412-505-5199</a></p>
        </div>
      </div>
      <div className="footer__bottom border-top d-flex justify-content-between col-12 mt-3">
        <span>© Copyright {new Date().getFullYear()} Superior Closings Services</span>
      </div>
    </footer>
  )
}

export default Footer
