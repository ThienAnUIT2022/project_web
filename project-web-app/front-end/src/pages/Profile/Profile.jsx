import React, { useEffect } from "react";
import { proFile } from "./profiless";
import "./profiles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Profile() {
    useEffect(() => {
        proFile();
      }, []);

    return (
        <div className="Profilepage">
            <nav className="navbar navbar-expand-md border-bottom">
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand fs-2 fw-3 text-start" href="/">User.</a>
                    <div className="text-end">
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
                            <ul className="navbar-nav me-auto mb-2 mb-md-0 fs-4 fw-3">
                                <li className="nav-item">
                                    <a href="/profile" className="active">Information</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/destination"> Your recent searches</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ------------------------------------------------------------------------ */}

            <main className="container-fluid content">
                <div className="row d-flex justify-content-between g-5">
                    <div className="col-lg-6 col-md-12">
                        <div className="top-detail">
                            <img
                                className="rounded-circle object-fit-cover"
                                src="https://mimosawedding.net/wp-content/uploads/2022/07/cach-chup-anh-chan-dung-6.jpg"
                                id="photo"
                                alt=''
                                style = {{ height:'100px', width:'100px', border:'solid 3px #fff'}}
                            />
                            
                            <input className="d-none" type="file" id="file"/>
                            <label  className="" for="file" id="upLoadbtn">
                                <i className="position-absolute bi bi-camera fs-2 ms-4"></i>
                            </label>

                            <h1>Hi, customers</h1>
                            <h3>Welcome your information</h3>
                        </div>

                        <div className="row detail">
                            <form action="">
                                <div className="row my-auto py-3">
                                    <div className="col-6 d-flex align-items-center">
                                        <label className="ms-4 position-absolute ">First Name</label>
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <input className="form-control bg-transparent border border-2 rounded" type="text" required />
                                            <i class="position-absolute bi bi-person-fill me-2"></i>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <label className="ms-4 position-absolute ">Last Name</label>
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <input className="form-control bg-transparent border border-2 rounded" type="text" required />
                                            <i class="position-absolute bi bi-person-fill me-2"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-auto py-3 row-cols-1">
                                    <div className="col d-flex align-items-center">
                                        <label className="ms-4 position-absolute ">Phone Number</label>
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <input className="form-control bg-transparent border border-2 rounded" type="text" required />
                                            <i class="position-absolute bi bi-lock-fill me-2"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-auto py-3">
                                    <div className="col-6 d-flex align-items-center">
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <label className="ms-4 position-absolute " for='birthday'>
                                                <i class="bi bi-cake2-fill me-3"></i>
                                            </label>
                                            <input 
                                                id='birthday'
                                                type="date"
                                                className="form-control bg-transparent border border-2 rounded text-white"
                                                value="Your birthday"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <label className="ms-4 position-absolute ">Male/Female</label>
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <input className="form-control bg-transparent border border-2 rounded" type="text" required />
                                            <i className="bx bx-male-female"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-auto py-3 row-cols-1">
                                    <div className="col d-flex align-items-center">
                                        <label className="ms-4 position-absolute ">Address</label>
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <input className="form-control bg-transparent border border-2 rounded" type="text" required />
                                            <i class="position-absolute bi bi-house-door-fill me-2"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-auto py-3 row-cols-1">
                                    <div className="col d-flex align-items-center">
                                        <label className="ms-4 position-absolute ">Email</label>
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <input className="form-control bg-transparent border border-2 rounded" type="text" required />
                                            <i class="position-absolute bi bi-envelope-fill me-2"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-auto py-3 row-cols-1">
                                    <div className="col d-flex align-items-center">
                                        <label className="ms-4 position-absolute ">Password</label>
                                        <div className="flex-row-reverse d-flex flex-fill align-items-center">
                                            <input className="form-control bg-transparent border border-2 rounded" type="password" id="password" required />
                                            <i class="position-absolute bi bi-eye-fill me-2" id='eyeicon'></i>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="btn-box col-12">
                            <a className="me-2" href="??">Edit your profile</a>
                            <a href="??">Remove account</a>
                        </div>
                    </div>

            {/* ------------------------------------------------------------------------ */}
                    <div className="col-lg-6 col-md-12">
                        <div className="body-calendar">
                            <div className="container-calendar">
                                <div className="left">
                                    <div className="calendar">
                                        <div className="month">
                                        {/* <i className="fas fa-angle-left prev"></i> */}
                                        <FontAwesomeIcon icon={faAngleLeft} className="prev" />
                                        <div className="date">december 2015</div>
                                        {/* <i className="fas fa-angle-right next"></i> */}
                                        <FontAwesomeIcon icon={faAngleRight} className="next" />
                                        </div>
                                        <div className="weekdays">
                                        <div>Sun</div>
                                        <div>Mon</div>
                                        <div>Tue</div>
                                        <div>Wed</div>
                                        <div>Thu</div>
                                        <div>Fri</div>
                                        <div>Sat</div>
                                        </div>
                                        <div className="days"></div>
                                        <div className="goto-today">
                                        <div className="goto">
                                            <input
                                            type="text"
                                            placeholder="mm/yyyy"
                                            className="date-input"
                                            />
                                            <button className="goto-btn">Go</button>
                                        </div>
                                        <button className="today-btn">Today</button>
                                        </div>
                                    </div>
                                </div>
                    
                    {/* ------------------------------------------------------------------------ */}

                                <div className="right">
                                    <div className="today-date">
                                        <div className="event-day">wed</div>
                                        <div className="event-date">12th december 2022</div>
                                    </div>
                                    
                                    <div className="events"></div>

                                    <div className="add-event-wrapper">
                                        <div className="add-event-header">
                                            <div className="title">Add Event</div>
                                            {/* <i className="fas fa-times close"></i> */}
                                            <FontAwesomeIcon icon={faTimes} className="close" />
                                        </div>

                                        <div className="add-event-body">
                                            <div className="add-event-input">
                                                <input
                                                type="text"
                                                placeholder="Event Name"
                                                className="event-name"
                                                />
                                            </div>
                                            <div className="add-event-input">
                                                <input
                                                type="text"
                                                placeholder="Event Time From"
                                                className="event-time-from"
                                                />
                                            </div>
                                            <div className="add-event-input">
                                                <input
                                                type="text"
                                                placeholder="Event Time To"
                                                className="event-time-to"
                                                />
                                            </div>
                                        </div>

                                        <div className="add-event-footer">
                                            <button className="add-event-btn">Add Event</button>
                                        </div>
                                    </div>
                                </div>

                                <button className="add-event">
                                {/* <i className="fas fa-plus"></i> */}
                                <FontAwesomeIcon icon={faPlus} className="plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Profile;