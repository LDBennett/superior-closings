import Modal from 'react-bootstrap/Modal'

const CustomModal = ({show, handler, size, children}) => {

  const handleClose = () => handler(false)

  return (
    <Modal show={show} onHide={handleClose} centered size={size}>
      <Modal.Header className="border-0" closeButton/>
      <Modal.Body className="pt-0 mb-5">
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal
