import React from "react";
function Footer()
{
    return(
        <div>
      <div className="card-footer">
      <footer
        className="d-flex flex-wrap justify-content-between align-items-center border-top"
      >
        <p className="col-md-4 mb-0 text-white">&copy; Group 5, NT208</p>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href="??"
              ><i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href="??">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href="??">
              <i className="bi bi-twitter-x"></i>
            </a>
          </li>
        </ul>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="./home.HTML" className="nav-link px-2 text-white">Home</a>
          </li>
          <li className="nav-item">
            <a href="./schedule.html" className="nav-link px-2 text-white"
              >Schedule</a>
          </li>
          <li className="nav-item">
            <a href="./destination.html" className="nav-link px-2 text-white"
              >Destinations</a>
          </li>
          <li className="nav-item">
            <a href="./FAQs.html" className="nav-link px-2 text-white">FAQs</a>
          </li>
          <li className="nav-item">
            <a href="./about.html" className="nav-link px-2 text-white">About</a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
    )
}
export default Footer;