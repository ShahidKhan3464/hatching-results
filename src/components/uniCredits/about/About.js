import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {

    return (
        <section className='About'>
            <Container>
                <div className="about-content">
                    <div className="what">
                        <h6>What are University Credits?</h6>
                        <p style={{ marginTop: '24px' }}>University Credits are generally honored by school districts for the purpose of advancement and salary increments/increases on the district step and column pay schedule. </p>
                    </div>
                    <div className="how">
                        <h6>How long does each course take and how many University Credits can I earn from each Hatching Results course?</h6>
                        <p>Each course takes approximately 15 hours to complete. You can earn 1 University Credit from each completed Hatching Results course.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About