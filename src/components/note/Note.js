import React from 'react'
import important from '../../assets/images/important.png'
import './style.css'

const Note = () => {

    return (
        <section className='Note'>
            <div className="important-note">
                <div className="title">
                    <div className="img">
                        <img src={important} alt="important" />
                    </div>
                    <h6>Important Note!</h6>
                </div>
                <p>
                    Once we verify that you have completed the final exam with a score of 75% or better, your instructor will notify CSUSM of your completion (you will also be notified when this occurs). The CEUs will then be distributed to you through CSUSM.
                </p>
            </div>

            <div className="ready">
                <h6>Are You Ready to Begin?</h6>
                <p>Want to take a self-paced course and earn CEUs for professional credentials?</p>
                <button>Register Now</button>
            </div>
        </section>
    )
}

export default Note