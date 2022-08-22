import React from 'react'
import { Form } from 'react-bootstrap'
import './style.css'

const CardNum = () => {

    return (
        <div className='cardNum'>
            <Form>
                <div className="grid">
                    <Form.Group className="mb-3">
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control type="text" placeholder="Name on Card" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="number" placeholder="9999-9999-9999" />
                    </Form.Group>
                </div>
                <div className="grid">
                    <Form.Group className="mb-3">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="date" placeholder="MM/YY" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>CVC Number</Form.Label>
                        <Form.Control type="number" placeholder="123" />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default CardNum