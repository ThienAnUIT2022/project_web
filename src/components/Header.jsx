import React from "react";
function Header()
{
    return(
        <div>
              <header>
           
      {/* Navbar*/}  
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="./home.HTML">VN-Backpacking</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="./home.HTML"
                  >Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./destination.html">Destinations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./schedule.html">Schedule</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./quicktips.html">Quick tips</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./FAQs.html">FAQs</a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div class="text-end">
              <a href="./login.html" target="_blank">
                <button type="button" class="btn btn-outline-light me-2">
                  Log in
                </button>
              </a>
              <a href="./register.html" target="_blank">
                <button type="button" class="btn btn-light">Sign up</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/*Navbar */}  
   
    </header>
        </div>
    )
}
export default Header;