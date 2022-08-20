import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import course from '../../../assets/images/course.png'
import './style.css'

const Description = () => {

    return (
        <section className='Description'>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="img">
                            <img src={course} alt="course" />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="text">
                            <h6>Course Description</h6>
                            <p>Use of Data in School Counseling (2nd Edition)</p>
                            <ul>
                                <li>
                                    It is an introduction to how school counselors and educators can begin to use data
                                    in designing, implementing, evaluating and improving school counseling and other programs in schools.
                                </li>
                                <li>
                                    Students who take this course will gain the following attitudes, knowledge, and skills:
                                </li>
                            </ul>
                            <b>Note:</b>
                            <p>A Digitial ebook version of this text is included with each purchase.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Description