import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import onlineCourses from '../../../assets/images/online-courses.png'
import teachers from '../../../assets/images/teachers.png'
import './style.css'

const Skill = () => {

    return (
        <section className='Skill main-bg'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="title">
                            <h6>Learn new skills to reach more students and make a greater IMPACT!</h6>
                            <p>Take high-quality online courses from leading experts in the field of school counseling and level up your comprehensive program for students</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bg-image">
                            <div id='card1' className="card">
                                <div className="img">
                                    <img src={onlineCourses} alt="online-courses" />
                                </div>
                                <h6>Certificate Courses</h6>
                            </div>
                            <div id='card2' className="card">
                                <div className="img">
                                    <img src={teachers} alt="teachers" />
                                </div>
                                <h6>Learn From Expert Teachers</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skill