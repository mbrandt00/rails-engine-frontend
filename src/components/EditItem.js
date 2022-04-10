import React from 'react'
import axiosConn from '../api/AxiosConn'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const EditItem = ({show, onHide, item}) => {
  let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosConn.patch(`/items/${item.id}`, {
            name: e.target.ItemName.value,
            description: e.target.Description.value,
            unit_price: e.target.UnitPrice.value
        }, {withCredentials: true})
        onHide();
        window.location.reload(false)
        
    }
  return (
    <div>
        <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col sm = {6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId= "ItemName">
                        <Form.Label> ItemName</Form.Label>
                        <Form.Control
                            type = "text"
                            name = "ItemName"
                            required 
                            defaultValue = {item.attributes.name}

                        />
                    </Form.Group>
                    <Form.Group controlId= "UnitPrice">
                        <Form.Label> UnitPrice</Form.Label>
                        <Form.Control
                            type = "number"
                            name = "UnitPrice"
                            required 
                            defaultValue = {item.attributes.unit_price}

                        />
                    </Form.Group>
                    <Form.Group controlId= "Description">
                        <Form.Label> Description</Form.Label>
                        <Form.Control
                            type = "text"
                            name = "Description"
                            required 
                            defaultValue = {item.attributes.description}
                        />
                    </Form.Group>
                    <Form.Group>
                        <button variant = "primary" type = "submit">Update Item</button>
                    </Form.Group> 

                </Form>

            </Col>

        </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default EditItem