import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to='/'>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="menu">
                        <ul className="menu-items">
                            <li className="item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="item">
                                <Link to="/courses">Courses</Link>
                            </li>
                            <li className="item">
                                <Link to="/payment">Payment</Link>
                            </li>
                            <li className="item">
                                <Link to="/paymentHistory">Payment History</Link>
                            </li>
                            <li className="item">
                                <Link to="/checkOut">CheckOut</Link>
                            </li>
                            <li className="item">
                                <Link to="/continue-education-unit">CEU</Link>
                            </li>
                            <li className="item">
                                <Link to="/university-credits">University Credits</Link>
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