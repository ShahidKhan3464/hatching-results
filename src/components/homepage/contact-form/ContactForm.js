import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactForm = () => {

    return (
        <Form>
            <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control as="textarea" placeholder="Message" style={{ height: '100px' }} />
            </Form.Group>
            <Button type="submit">Send</Button>
        </Form>
    )
}

export default ContactForm