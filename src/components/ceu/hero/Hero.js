import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ceu from '../../../assets/images/ceu.png'
import './style.css'

const Hero = () => {

    return (
        <section className='hero main-bg'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h6>Continue Education Units (CEUs)</h6>
                        <p>Hatching Results is pleased to announce that in partnership with California State University San Marcos (CSUSM), you can now earn Continuing Education Units (CEUs) by taking Hatching Results online courses!</p>
                    </Col>
                    <Col lg={6}>
                        <div className="img">
                            <img src={ceu} alt="ceu" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Hero