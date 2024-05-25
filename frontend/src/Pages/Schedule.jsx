import React, { useState } from "react";
import { useRef } from 'react';
import '../assets/jss/schedule.css';

import GoogleCalendar from "../components/GoogleCalendar.jsx";
import CalendarComponent from "../components/CalendarComponent.jsx";
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: 'calc(50% + 40px)',
    left: '50%',
    right: 'auto',
    bottom: '10px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#c7b0e7',
    width: '80%', // Đặt độ rộng tùy ý
    maxWidth: '2000px', // Đặt độ rộng tối đa cho popup
    height: '90%', // Đặt chiều cao tùy ý
    maxHeight: '1200px', // Đặt chiều cao tối đa cho popup
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

    overflowY: 'auto'  // Cho phép cuộn nếu nội dung quá lớn
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Đảm bảo overlay không trong suốt
  }
};

Modal.setAppElement('#App');

function Schedule()
{
  const [events, setEvents] = useState([]);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    console.log ('signin true')
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setUserLoggedIn(true);
  };
  
// lets make plane button
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };


    return(
        <div>
    <main id="mainschedule">
      <div className="container">
        <div className="bg-box-top">
          <h1>Scheduling</h1>
          <p className="lead">
            Planning makes your trip more efficient, maximizes time, and
            minimizes unnecessary stress.
          </p>
          <div>
          <button id="letMakeplaneButton"  className="btn btn-outline-light px-2" onClick={handleScroll}>
            Let's make a plan now 
          </button>
          </div>
        </div>
        <h2 className="pb-2 border-bottom">Let's plan the perfect trip</h2>

        <div
          className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5"
        >
          <div className="col-md-9 col-sm-12 flex-column align-items-start gap-3">
            <h2  ref={targetRef} className="fw-bold text-body-emphasis">Plan your trip</h2>
            <p className="text-align">
              A travel plan is a summary of your activities, location, time,
              transportation, accommodation, and budget for your trip. It helps
              you organize and prepare for your trip in a smart, efficient way.
            </p>
            <div className="ture-bnt">
              <button  
                 
                 id="MakeplaneButton"
                 className="btn btn-primary"
                 onClick={openModal}>
                 Make plan
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Even popup"
              >
                <div className="popup-content">
                <h2 className="fw-bold text-body-emphasis popuptitle">Let's plan your next trip together</h2>
                  <div className="row">
                     <div className="row">
                        <button type="button" class="btn-close closebtn" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div class="row align-items-start">
                        <div class="col-8 calendar">
                           <CalendarComponent events={events} />
                        </div>
                        <div class="col-4 ">
                           <GoogleCalendar setEvents={setEvents} />
                        </div>
                        </div>
                        
                    </div>
                </div>
              </Modal>
            </div>
            <div class="calendarax">
            <CalendarComponent events={events} />
            </div>
          </div>
          
          <div className="col-md-3 col-sm-14">
            <div className="scrollar-bg">
              <div className="row row-cols-1 row-cols-md-1 g-4">
                <div
                  className="d-flex flex-column align-items-stretch flex-shrink-0 rownd"
                >
                  <a href="??" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
                    <span className="fs-5 fw-semibold">Favorite place</span>
                  </a>
                  <div className="scrollar-div">
                    <div className="scrollar-object">
                      <div
                        className="list-group list-group-flush border-bottom scrollarea"
                      >
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                        <a
                          href="??"
                          className="list-group-item list-group-item-action py-3 lh-sm"
                        >
                          <div
                            className="d-flex w-100 align-items-center justify-content-between"
                          >
                            <strong className="mb-1">Location name</strong>
                          </div>
                          <div className="col-10 mb-1 small">
                            Brief information of the location.
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid">
          <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 g-4">
            <div className="col-md-6 col-sm-12 d-flex flex-column gap-2">
              <div className="mid_butt">
                <a href="??" className="btn btn-primary" role="button">Invite orthers </a>
                <h4 className="fw-semibold px-1 text-body-emphasis">
                  Invite your friends
                </h4>
                <p className="text-body-secondary">
                  Plan this trip together with your friends.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column gap-2">
              <div className="mid_butt">
                <a href="./quicktips.html" className="btn btn-primary">Quick tips </a>
                <h4 className="fw-semibold px-1 text-body-emphasis">Little tip</h4>
                <p className="text-body-secondary" boder>
                  Little tips to help you get things done more easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
   
  </main>
        </div>
    )
}
export default Schedule