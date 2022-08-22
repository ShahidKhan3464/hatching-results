import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import step1 from '../../assets/images/step1.png'
import step2 from '../../assets/images/step2.png'
import step3 from '../../assets/images/step3.png'
import ceuSteps from '../../assets/images/ceu-steps.png'
import './style.css'

const Steps = () => {

    return (
        <section className='Steps'>
            <Container>
                <div className="title">
                    <h6>
                        I’m Interested in CEUs.
                        <b style={{ display: 'block' }}>
                            WHAT STEPS DO I TAKE NEXT?
                        </b>
                    </h6>
                </div>
                <Row>
                    <Col lg={8} style={{ marginLeft: '-3rem' }}>
                        <div className="steps">
                            <div className="step">
                                <div className="img">
                                    <img src={step1} alt="step1" />
                                </div>
                                <p>
                                    Register with Hatching Results here. (If your school or district will be paying for your enrollment in one or more online courses via purchase order, please contact us for assistance.)
                                </p>
                            </div>

                            <div className="step">
                                <div className="img">
                                    <img src={step2} alt="step2" />
                                </div>
                                <p>
                                    Once registered with Hatching Results, you will receive an email that will provide you with access to the online course as well as a registration link for CSUSM CEUs.
                                </p>
                            </div>

                            <div className="step">
                                <div className="img">
                                    <img src={step3} alt="step3" />
                                </div>
                                <p>
                                    Be sure to complete the course by Cal State University San Marcos' deadline.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="bg-img">
                            <img src={ceuSteps} alt="ceu-steps" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Steps