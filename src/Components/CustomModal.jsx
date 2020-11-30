import Modal from 'react-bootstrap/Modal'

const CustomModal = ({show, handler, children}) => {

  const handleClose = () => handler(false)
  const handleShow = () => handler(true)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="p-1 border-0" closeButton/>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer/>
    </Modal>
  )
}

export default CustomModal
