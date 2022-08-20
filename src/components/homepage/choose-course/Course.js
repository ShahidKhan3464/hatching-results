import React from 'react'
import Underline from '../underline/Underline'
import './style.css'

const Course = () => {

    return (
        <section className='Course'>
            <div className="title">
                <h6>Choose the course option that's right for you</h6>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card-header">
                        <h6>Self-Paced Course</h6>
                        <Underline />
                    </div>
                    <div className="card-body">
                        <p>
                            Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h6>Self-Paced Course + Continuing Education Units (CEUs)</h6>
                        <Underline />
                    </div>
                    <div className="card-body">
                        <p>
                            Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="#home">Learn More</a>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h6>Self-Paced Course + University Credits</h6>
                        <Underline />
                    </div>
                    <div className="card-body">
                        <p>
                            Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="#home">Learn More</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Course