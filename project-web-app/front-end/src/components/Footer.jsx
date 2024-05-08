import React from 'react';
import '../assets/css/Footer.css';

function Footer() {
    return (
        <div>
            {/* FOOTER */}
            <div className="card-footer">
                <footer className="d-flex flex-wrap justify-content-between align-items-center px-3 border-top">
                    <p className="col-md-4 mb-0 text-white">&copy; Group 5, NT208</p>

                    <ul className="col-md-4 justify-content-center align-items-center list-unstyled d-flex mb-3 mb-md-0 me-md-auto ">
                    <li className="ms-3">
                        <a className="text-white" href="https://www.instagram.com">
                        <i className="bi bi-instagram"></i>
                        </a>

                    </li>
                    <li className="ms-3">
                        <a className="text-white" href="https://www.facebook.com">
                        <i className="bi bi-facebook"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-white" href="https://www.twitter.com">
                        <i className="bi bi-twitter-x"></i>
                        </a>
                    </li>
                    </ul>

                    <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2 text-white">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/schedule" className="nav-link px-2 text-white">Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a href="/destination" className="nav-link px-2 text-white">Destinations</a>
                    </li>
                    <li className="nav-item">
                        <a href="/FAQs" className="nav-link px-2 text-white">FAQs</a>
                    </li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default Footer;