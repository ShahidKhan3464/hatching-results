import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import uniCredits from '../../../assets/images/uni-credits.png'
import './style.css'

const Hero = () => {

    return (
        <section className='hero main-bg'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h6>University Credits</h6>
                        <p>Hatching Results is pleased to announce that in partnership with California State University San Marcos (CSUSM), you can now earn University Credits by taking Hatching Results online courses!</p>
                    </Col>
                    <Col lg={6}>
                        <div className="img">
                            <img src={uniCredits} alt="uniCredits" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero