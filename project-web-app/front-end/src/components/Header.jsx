import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../assets/css/Header.css";

function Header() {
  const [auth, setAuth] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios.get("https://vn-backpacking.onrender.com:3306/verifyUser", { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          // Fetch the avatar image
          axios.get("https://vn-backpacking.onrender.com:3306/uploadAvatar", { withCredentials: true })
            .then(res => {
              if (res.data && res.data[0] && res.data[0].imgAvatar) {
                setAvatar(`https://vn-backpacking.onrender.com:3306/images/${res.data[0].imgAvatar}`);
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

  const handleLogout = () => {
    axios.get("https://vn-backpacking.onrender.com:3306/logout", { withCredentials: true })
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(false);
          setAvatar(null); // Clear the avatar on logout
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              VN-Backpacking
            </a>
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
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/destination" ? "active" : ""}`} to="/destination">
                    Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/schedule" ? "active" : ""}`} to="/schedule">
                    Schedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/quicktips" ? "active" : ""}`} to="/quicktips">
                    Quick tips
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/FAQs" ? "active" : ""}`} to="/FAQs">
                    FAQs
                  </Link>
                </li>
              </ul>

              {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
              </form> */}

              <div className="text-end">
                {auth ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={avatar || "default-avatar-url"}
                        className="rounded-circle border border-light avatar"
                        id="photo"
                        alt="User Avatar"
                        width="40px"
                        height="40px"
                      />
                    </Link>
                    <button type="button" className="btn btn-outline-light ms-2 me-2" onClick={handleLogout}>
                      Log out
                    </button>
                  </div>
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
      </header>
    </div>
  );
}

export default Header;
