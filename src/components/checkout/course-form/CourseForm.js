import React from 'react'
import { Container, Form } from 'react-bootstrap'
import './style.css'

const CourseForm = () => {

    return (
        <section className='Course-form main-bg'>
            <Container>
                <div className="title">
                    <h6>Checkout</h6>
                </div>
                <div className="course">
                    <div className="course-header">
                        <h6>How you heard about this course?</h6>
                    </div>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`}>
                                <Form.Check
                                    inline
                                    type={type}
                                    name="group1"
                                    defaultChecked
                                    label="Social Media"
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    type={type}
                                    name="group1"
                                    label="Friends"
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    type={type}
                                    name="group1"
                                    label="Family"
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    inline
                                    type={type}
                                    name="group1"
                                    label="School"
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    inline
                                    type={type}
                                    name="group1"
                                    label="College"
                                    id={`inline-${type}-5`}
                                />
                            </div>
                        ))}
                    </Form>
                </div>
            </Container>
        </section>
    )
}

export default CourseForm