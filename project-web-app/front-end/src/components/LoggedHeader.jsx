import React from 'react';

function LoggedHeader() {
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
                                    Log out
                                    </button>
                                </a>

                                <a href='/profile' target='_blank'>
                                    <img src='https://gamek.mediacdn.vn/zoom/600_315/133514250583805952/2023/5/16/avatar1684223366100-16842233662941543551172-0-76-274-515-crop-16842272399221546766838.jpg'
                                        className='rounded-circle' 
                                        alt='Avatar'
                                        height='50px'
                                        width='50px'
                                    ></img>
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

export default LoggedHeader;