import React, { useState, useRef, useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserFavorites from "../components/UserFavorites.jsx";
import GoogleCalendar from "../components/GoogleCalendar.jsx";
import CalendarComponent from "../components/CalendarComponent.jsx";
import '../assets/css/schedule.css';
import Modal from 'react-modal';
import axios from "axios"; 

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

Modal.setAppElement('#root');

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

 // popup copy link

 const [showModal, setShowModal] = useState(false);
 const [copied, setCopied] = useState(false);

 const handleOpenModal = () => {
   setShowModal(true);
 };

 const handleCloseModal = () => {
   setShowModal(false);
   setCopied(false);  // Reset the copied state when closing the modal
 };

 const handleCopy = () => {
   const linkInput = document.getElementById("linkInput");
   linkInput.select();
   document.execCommand("copy");
   setCopied(true);
   setTimeout(() => {
     setCopied(false);
   }, 2000); // Reset the copied state after 2 seconds
 }

// lets make plane button
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthDay: "",
    gender: "",
    address: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    axios.get("https://vn-backpacking.onrender.com/verifyUser", { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          // Fetch the ID and email
          axios.get("https://vn-backpacking.onrender.com/userdata", { withCredentials: true })
            .then(res => {
              if (res.data && res.data && res.data.email && res.data.id) {
                setUserData(res.data);
              }
            })
            .catch(err => console.log(err));
        } else {
          setAuth(false);
        }
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
      });
  }, []);


    return(
        <div>
          <Header />
          <div className="Schedule">
            <main id="mainschedule">
              <div className="container">
                <div className="bg-box-top">
                  <h1>Scheduling</h1>
                  <p className="lead">
                    Planning makes your trip more efficient, maximizes time, and
                    minimizes unnecessary stress.
                  </p>
                  <div>
                    <button id="letMakeplaneButton" className="btn btn-outline-light px-2" onClick={handleScroll}>
                      Let's make a plan now
                    </button>
                  </div>
                </div>
                <h2 className="pb-2 border-bottom">Let's plan the perfect trip</h2>

                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                  <div className="col-md-9 col-sm-12 flex-column align-items-start gap-3">
                    <h2 ref={targetRef} className="fw-bold text-body-emphasis">Plan your trip</h2>
                    <p className="text-align">
                      A travel plan is a summary of your activities, location, time,
                      transportation, accommodation, and budget for your trip. It helps
                      you organize and prepare for your trip in a smart, efficient way.
                    </p>
                    <div className="ture-bnt">
                      <button id="MakeplaneButton" className="btn btn-primary" onClick={openModal}>
                        Make plan
                      </button>
                      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Even popup">
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

                  <div className="col-md-3 col-sm-12">
                    <UserFavorites userId={userData.id}/>
                  </div>
                </div>

                <div className="mid">
                  <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 g-4">
                    <div className="col-md-6 col-sm-12 d-flex flex-column gap-2">
                      <div className="mid_butt">
                      <a className="btn btn-primary" role="button" onClick={handleOpenModal} >Introduce us </a>
                        <h4 className="fw-semibold px-1 text-body-emphasis">
                        Introducing our website
                        </h4>
                        <p className="text-body-secondary">
                        Recommend our website to your friends.
                        </p>
                      </div>
                    </div>
                    {showModal && (
                      <div className="modal" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                          <span type="button" class="btn-close closebtn" aria-label="Close" onClick={handleCloseModal}>&times;</span>
                          <p>Copy this link to share to your friend :</p>
                          <div className="copy-container">
                            <input type="text" id="linkInput" value="https://vn-backpacking.vercel.app/" readOnly />
                            <button className="copy-button" onClick={handleCopy}>
                              {copied ? <i class="bi bi-check-lg"></i> :  <i class="bi bi-copy"></i> }
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-md-6 col-sm-12 d-flex flex-column gap-2">
                      <div className="mid_butt">
                        <a href="./quicktips" className="btn btn-primary">Quick tips </a>
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
          <Footer />
        </div>
    )
}
export default Schedule;