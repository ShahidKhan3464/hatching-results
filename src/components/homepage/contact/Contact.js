import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../contact-form/ContactForm'
import contact from '../../../assets/images/contact.png'
import underline from '../../../assets/images/underline.png'
import './style.css'

const Contact = () => {

    return (
        <section className='Contact'>
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className="top">
                            <h6>Let's Get In Touch</h6>
                            <div className="img">
                                <img src={underline} alt="underline" />
                            </div>
                            <p>Contact us to learn more.</p>
                        </div>
                        <ContactForm />
                    </Col>
                    <Col lg={5}>
                        <div className="contact-img">
                            <img src={contact} alt="contact" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact