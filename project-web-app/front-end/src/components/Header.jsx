import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import images from '../assets/images';
import '../assets/css/Header.css';

function Header() {
    const location = useLocation();
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <div>
            <header >
                {/* Navbar */}
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">VN-Backpacking</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/destination' ? 'active' : ''}`} to="/destination">Destinations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/schedule' ? 'active' : ''}`} to="/schedule">Schedule</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/quicktips' ? 'active' : ''}`} to="/quicktips">Quick tips</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/FAQs' ? 'active' : ''}`} to="/FAQs">FAQs</Link>
                                </li>
                            </ul>
                            <div className="text-end">
                            {isLoggedIn ? (
                                <Link to='/profile'>
                                    <img src={images['avtHeader.png']}
                                        className='rounded-circle'
                                        alt='Avatar'
                                        height='40px'
                                        width='40px'
                                    />
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <button type="button" className="btn btn-outline-light me-2">
                                        Log in
                                    </button>
                                </Link>
                            )}
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
            </header>
        </div>
    );
}

export default Header;