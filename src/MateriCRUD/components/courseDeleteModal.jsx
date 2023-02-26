import { Modal, Button } from "react-bootstrap"

const CourseDeleteModal = ({ show, handleClose, onAgree }) => {

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                are you sure?
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                <Button variant="primary" onClick={onAgree}>
                    Submit
                </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default CourseDeleteModal