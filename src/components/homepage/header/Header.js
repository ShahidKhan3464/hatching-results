import React from 'react'
import logo from '../../../assets/images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Header = () => {

    const handleToggle = (e) => {
        const menu = document.getElementsByClassName('menu')[0];
        if (e.target.className === 'fa-solid fa-bars') {
            e.target.className = 'fa-solid fa-times';
            menu.className = 'menu show';
        }
        else {
            e.target.className = 'fa-solid fa-bars';
            menu.className = 'menu';
        }
        // menu.classList.toggle('show');
    }

    return (
        <header className='Header'>
            <div className='container'>
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul className="menu-items">
                            <li className="item">
                                <a href="/">Home</a>
                            </li>
                            <li className="item">
                                <a href="/courses">Courses</a>
                            </li>
                            <li className="item">
                                <a href="/payment">Payment</a>
                            </li>
                            <li className="item">
                                <a href="/paymentHistory">Payment History</a>
                            </li>
                            <li className="item">
                                <a href="/checkOut">CheckOut</a>
                            </li>
                            <li className="item">
                                <a href="/continue-education-unit">CEU</a>
                            </li>
                            <li className="item">
                                <a href="/university-credits">University Credits</a>
                            </li>
                        </ul>
                    </div>
                    <i className="fa-solid fa-bars" onClick={handleToggle}></i>
                </nav>
            </div>
        </header>
    )
}

export default Header