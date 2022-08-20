import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import logo2 from '../../../assets/images/logo2.png'
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'
import telegram from '../../../assets/images/telegram.png'
import instagram from '../../../assets/images/instagram.png'
import youtube from '../../../assets/images/youtube.png'
import './style.css'

const Footer = () => {

    return (
        <footer className='Footer'>
            <div className="bg-image"></div>
            <Container>
                <div className="Footer-content">
                    <div className="left">
                        <div className="logo">
                            <img src={logo2} alt="logo2" />
                        </div>
                    </div>
                    <div className="middle">
                        <Button type="button">Contact Us</Button>
                    </div>
                    <div className="right">
                        <div className="social-media">
                            <a href="#home"><img src={facebook} alt="facebook" /></a>
                            <a href="#home"><img src={twitter} alt="twitter" /></a>
                            <a href="#home"><img src={telegram} alt="telegram" /></a>
                            <a href="#home"><img src={instagram} alt="instagram" /></a>
                            <a href="#home"><img src={youtube} alt="youtube" /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>
                        © Copyright 2022 by Hatching Results.
                        All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer