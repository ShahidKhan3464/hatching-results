import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import CardNumber from '../cardNumber/CardNum'
import creditCard from '../../../assets/images/credit-card.png'
import paypal from '../../../assets/images/paypal.png'
import stripe from '../../../assets/images/stripe.png'
import applePay from '../../../assets/images/apple-pay.png'
import './style.css'

const PaymentForm = () => {

    return (
        <div className="Payment-form">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="payment-method">
                            <div className="payment-method-header">
                                <h6>Select Payment Method</h6>
                            </div>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`${type}`}>
                                        <div className='flx'>
                                            <Form.Check
                                                type={type}
                                                name="group1"
                                                defaultChecked
                                                label="Credit Card"
                                                id={`${type}-1`}
                                            />
                                            <div className="pay-img">
                                                <img src={creditCard} alt="credit-card" />
                                            </div>
                                        </div>
                                        <div className='flx'>
                                            <Form.Check
                                                type={type}
                                                name="group1"
                                                label="PayPal"
                                                id={`${type}-2`}
                                            />
                                            <div className="pay-img">
                                                <img src={paypal} alt="paypal" />
                                            </div>
                                        </div>
                                        <div className='flx'>
                                            <Form.Check
                                                type={type}
                                                name="group1"
                                                label="Stripe"
                                                id={`${type}-3`}
                                            />
                                            <div className="pay-img">
                                                <img src={stripe} alt="stripe" />
                                            </div>
                                        </div>
                                        <div className='flx'>
                                            <Form.Check
                                                type={type}
                                                name="group1"
                                                label="Apple Pay"
                                                id={`${type}-4`}
                                            />
                                            <div className="pay-img">
                                                <img src={applePay} alt="applePay" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Form>
                        </div>
                        <CardNumber />
                    </Col>
                    <Col lg={6}>
                        <div className="overall-payment">
                            <div className="overall-payment-header">
                                <h6>Summary</h6>
                            </div>
                            <div className="overall-payment-body">
                                <div className="overall-payment-top">
                                    <p>Course Title</p>
                                    <h6>Risk and Compliance Courses</h6>
                                </div>
                                <div className="overall-payment-item">
                                    <h6>Course Price</h6>
                                    <p>$35</p>
                                </div>
                            </div>
                            <div className="overall-payment-footer">
                                <h6>Total</h6>
                                <p className='price'>$35</p>
                            </div>
                            <button>Complete Payment</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PaymentForm