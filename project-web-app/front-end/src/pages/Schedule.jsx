import React, {useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserFavorites from "../components/UserFavorites.jsx";
import axios from "axios";
import '../assets/css/schedule.css';


function Schedule() {
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
    axios.get("http://localhost:8081/verifyUser", { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          // Fetch the ID and email
          axios.get("http://localhost:8081/userdata", { withCredentials: true })
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
                  <button id="letMakeplaneButton" className="btn btn-outline-light px-2">
                    Let's make a plan now 
                  </button>
                </div>
              </div>
              <h2 className="pb-2 border-bottom">Let's plan the perfect trip</h2>

              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col-md-3 col-sm-12">
                  <UserFavorites userId={userData.id}/>
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
        <Footer />
      </div>
  )
}
export default Schedule