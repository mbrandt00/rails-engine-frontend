import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import Select from 'react-select'
import React from 'react'
import axiosConn from '../api/AxiosConn'
import { useEffect, useState } from 'react';
const AddItem = ({show, onHide}) => {
    const [merchants, setMerchants] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosConn.post('/items', {
            name: e.target.ItemName.value,
            description: e.target.Description.value,
            unit_price: e.target.UnitPrice.value,
            merchant_id: e.target.MerchantId.value, 
        }, {withCredentials: true})
        onHide();
        window.location.reload(false)
    }
    useEffect( () => {
        const fetchMerchants = async () => {
          try {
            const response = await axiosConn.get('/merchants', {withCredentials: true}) 
            setMerchants(response.data.data)
          } catch (error) {
            console.log(error)
          }
        };
        fetchMerchants();
      }, [])
  return (
      
   <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
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
                            placeholder = "ItemName"

                        />
                    </Form.Group>
                    <Form.Group controlId= "UnitPrice">
                        <Form.Label> UnitPrice</Form.Label>
                        <Form.Control
                            type = "number"
                            name = "UnitPrice"
                            required 
                            placeholder = "UnitPrice"

                        />
                    </Form.Group>
                    <Form.Group controlId= "Description">
                        <Form.Label> Description</Form.Label>
                        <Form.Control
                            type = "text"
                            name = "Description"
                            required 
                            placeholder = "Description"

                        />
                    </Form.Group>
                    <Form.Group>
                    <Select aria-label="Default select example"
                    name = "MerchantId"
                    options = {merchants}
                    getOptionLabel = {(option) => option.attributes.name}
                    getOptionValue = {(option) => option.id}

                    />
                    </Form.Group>
                    <Form.Group>
                        <button variant = "primary" type = "submit">Add Item</button>
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
  )
}

export default AddItem