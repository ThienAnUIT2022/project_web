import React, { useEffect } from "react";
import "./profiles.css";
import { proFile } from "./profiless";

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
      <div className="body-Profile">
        <header className="header">
          <a href="??" className="logo">
            User.
          </a>

          <nav className="navbar">
            <a href="??" className="active">
              Information
            </a>
            <a href="/destination" className="destination">
              Your recent searches
            </a>
            <a href="??">Home</a>
          </nav>
        </header>

        <section className="information">
          <div className="information-content">
            <div className="information-content2">
              <div className="image">
                <img
                  src="https://mimosawedding.net/wp-content/uploads/2022/07/cach-chup-anh-chan-dung-6.jpg"
                  id="photo"
                  alt=""
                />
                <input type="file" id="file" />
                <label for="file" id="upLoadbtn">
                  <i className="bx bx-camera"></i>
                </label>
              </div>
              <h1>Hi, customers</h1>
              <h3>Welcome your information</h3>

              <div className="wrapper">
                <form action="">
                  <div className="two-form">
                    <div className="input-box">
                      <input type="text" required />
                      <i className="bx bxs-user"></i>
                      <label>First Name</label>
                    </div>
                    <div className="input-box">
                      <input type="text" required />
                      <i className="bx bxs-user"></i>
                      <label>Last Name</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <input type="text" required />
                    <i className="bx bxs-lock-alt"></i>
                    <label>Phone Number</label>
                  </div>
                  <div className="two-forms">
                    <div className="input-box">
                      <input
                        type="date"
                        className="birthday"
                        value="Your birthday"
                        required
                      />
                      <i className="bx bxs-cake"></i>
                    </div>
                    <div className="input-box">
                      <input type="text" required />
                      <i className="bx bx-male-female"></i>
                      <label>Male/Female</label>
                    </div>
                  </div>
                  <div className="input-box">
                    <input type="text" required />
                    <i className="bx bxs-home"></i>
                    <label>Address</label>
                  </div>
                  <div className="input-box">
                    <input type="text" required />
                    <i className="bx bxs-envelope"></i>
                    <label>Email</label>
                  </div>
                  <div className="input-box">
                    <input type="password" id="password" required />
                    <i className="bx bxs-lock-alt" id="eyeicon"></i>
                    <label>Password</label>
                  </div>
                </form>
              </div>

              <div className="btn-box">
                <a href="??">Edit your profile</a>
                <a href="??">Remove account</a>
              </div>
            </div>
          </div>
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
        </section>
      </div>
    </div>
  );
}

export default Profile;
