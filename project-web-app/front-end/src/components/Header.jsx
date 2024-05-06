import React from 'react';
import '../assets/css/Header.css';

function Header() {
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
                                    <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                    >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/destination">Destinations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/schedule">Schedule</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/quicktips">Quick tips</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/FAQs">FAQs</a>
                                </li>
                            </ul>
                            <div className="text-end">
                                <a href="/login" target="_blank">
                                    <button type="button" className="btn btn-outline-light me-2">
                                    Log in
                                    </button>
                                </a>
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