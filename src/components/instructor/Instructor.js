import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import instructor from '../../assets/images/instructor.png'
import textbook from '../../assets/images/textbook.png'
import './style.css'

const Instructor = () => {

    return (
        <section className='Instructor'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="left">
                            <div className="text">
                                <h6>Instructor Methods and Course Design</h6>
                                <p>This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.</p>
                            </div>
                            <div className="text">
                                <h6>Best-Selling ebook Included</h6>
                                <p>Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.</p>
                            </div>
                            <div className="text">
                                <h6>Suggested Readings</h6>
                                <p>American School Counselor Association. (2022). The ASCA national model: A framework for school counseling programs (4th ed.). Alexandria, VA. Author.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="bg-image">
                            <div id='instructor' className="box">
                                <div className="img">
                                    <img src={instructor} alt="instructor" />
                                </div>
                                <h6>instructor methods</h6>
                            </div>
                            <div id='textbooks' className="box">
                                <div className="img">
                                    <img src={textbook} alt="textbook" />
                                </div>
                                <h6>course textbooks</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Instructor