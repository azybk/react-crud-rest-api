import { useEffect, useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"

const CourseEditModal = ({ show, handleClose, handleSubmit, data }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitData = () => {
        const submitPayload = {
            id: data.id,
            title,
            description
        }

        handleSubmit(submitPayload)
    }

    useEffect(() => {
        setDescription(data.description)
        setTitle(data.title)
    }, [data])

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" onChange={(e) => setTitle(e.target.value)} 
                            placeholder="course title" defaultValue={title} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as="textarea" onChange={(e) => setDescription(e.target.value)} 
                            placeholder="course description" defaultValue={description}/>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                <Button variant="primary" onClick={submitData}>
                    Submit
                </Button>
            </Modal.Footer>
      </Modal>
    )
}

export default CourseEditModal