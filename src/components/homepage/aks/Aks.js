import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import attitude from '../../../assets/images/attitude.png'
import knowledge from '../../../assets/images/knowledge.png'
import skill from '../../../assets/images/skill.png'
import './style.css'

const Aks = () => {

    return (
        <section className='Aks'>
            <Container>
                <div className="aks-data">
                    <Row>
                        <Col lg={4}>
                            <div className="img">
                                <img src={attitude} alt="attitude" />
                            </div>
                            <h6>Attitudes</h6>
                            <ul>
                                <li>Believe in the value of collecting data</li>
                                <li>Believe using data can effect change in students</li>
                                <li>Believe it is important to chart goals, objectives, and outcomes</li>
                                <li>Believe it is important to disaggregate data</li>
                                <li>Believe it is important for school counselors to be experts in certain data sets</li>
                                <li>Believe it is important to use data to design interventions</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <div className="img">
                                <img src={knowledge} alt="knowledge" />
                            </div>
                            <h6>knowledge</h6>
                            <ul>
                                <li>Identify accessible sources of school data</li>
                                <li>Identify achievement-related and achievement-data</li>
                                <li>Describe the purpose of data collection</li>
                                <li>Compare and contrast process, perception, and results data.</li>
                                <li>Explain the ASK acronym</li>
                                <li>Define immediate, intermediate, and long-range data</li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <div className="img">
                                <img src={skill} alt="skill" />
                            </div>
                            <h6>Skills</h6>
                            <ul>
                                <li>Locate data via online data resources</li>
                                <li>Draw a visual that explains data linkages</li>
                                <li>Create measurable outcome goals</li>
                                <li>Draw the Hatching Results conceptual diagram</li>
                                <li>Explain the conceptual diagram for intentional guidance</li>
                                <li>Create the conceptual diagram for systems change</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Aks