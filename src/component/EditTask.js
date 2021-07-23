
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editTask } from '../redux/Action/Action'


const EditTask = ({ task }) => {
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState("");
  
    const dispatch = useDispatch()
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-dark" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Edit Task :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control type="text" placeholder="Enter new task title ..."
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {
              dispatch(editTask(task.id, newTitle));
              handleClose()
            }}>
              Edit task
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditTask
  