import React, { useState } from 'react';
import { Modal, Form, InputGroup, Col, Button } from 'react-bootstrap';
import "../../css/Member.css";

const Member = (props) => {

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return(
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="member-modal-header">
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationCustomPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formGridDropdown">
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select">
                                <option>User</option>
                                <option>Manager</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit">Save</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Member;