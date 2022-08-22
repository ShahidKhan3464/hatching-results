import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'

const About = () => {

    return (
        <section className='About'>
            <Container>
                <div className="about-content">
                    <div className="what">
                        <h6>What are Continuing Education Units? (CEUs)</h6>
                        <p style={{ marginTop: '24px' }}>CEUs are a nationally-recognized unit of measurement for a variety of non-credit programs applying toward re-licensure, promotion, or career advancement. </p>
                    </div>
                    <div className="how">
                        <h6>How long does each course take and how many CEUs can I earn from each Hatching Results course?</h6>
                        <p>Each course takes approximately 15 hours to complete. 1 CEU is equal to 10 hours of course work. Therefore, you can earn 1.5 CEUs with each Hatching Results course you complete.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About