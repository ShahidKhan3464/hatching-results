import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const Registration = () => {

    return (
        <section className='Registration'>
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className="bg-image">
                            <div className="box">
                                <h6>$129 <span>only</span> </h6>
                                <p>Total Registration Cost</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="title">
                            <h6>Course Registration</h6>
                        </div>
                        <ul>
                            <li>Hatching Results Registration for CEUs</li>
                            <p>Hatching Results self-paced online courses and CEUs are $79 each. The $79 to Hatching Results fee includes the cost of the course and a trained Instructor who will grade your final exam and report successful course completion to CSUSM for unit distribution.</p>

                            <li>CSUSM Registration Fee for CEUs</li>
                            <p>To register for CEUs through CSUSM, participants must pay a $40 fee. After registering through Hatching Results, an email will be sent with instructions on how to enroll through CSUSM. </p>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Registration