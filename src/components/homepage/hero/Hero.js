import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import pieChart from '../../../assets/images/pie-chart.png'
import onlineEducation from '../../../assets/images/online-education.png'
import './style.css'

const Hero = () => {

    return (
        <section className='Hero'>
            <Container>
                <Row>
                    <Col lg={7}>
                        <h6>
                            Data, Data, Data:
                            Designing, Implementing, Evaluating & Improving School Counseling Programs
                        </h6>
                    </Col>
                    <Col lg={5}>
                        <div className="bg-image">
                            <div id='B1' className="img">
                                <img src={pieChart} alt="pie-chart" />
                            </div>
                            <div id='B2' className="img">
                                <img src={onlineEducation} alt="online-education" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero