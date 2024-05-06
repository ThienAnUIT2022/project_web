import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/schedule.css';

function Schedule()
{
    return(
      <div>
          <Header></Header>
        <div className="Schedule">
          <main>
            <div className="container">
              <div className="bg-box-top">
                <h1>Scheduling</h1>
                <p className="lead">
                  Planning makes your trip more efficient, maximizes time, and
                  minimizes unnecessary stress.
                </p>
                <a className="btn btn-outline-light px-2" href="/schedule" role="button">Let's make a plan now &raquo;</a>
              </div>
              <h2 className="pb-2 border-bottom">Let's plan the perfect trip</h2>
        
              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col-md-9 col-sm-12 flex-column align-items-start gap-3">
                  <h2 className="fw-bold text-body-emphasis">Plan your trip</h2>
                  <p className="text-align">
                    A travel plan is a summary of your activities, location, time,
                    transportation, accommodation, and budget for your trip. It helps
                    you organize and prepare for your trip in a smart, efficient way.
                  </p>
                  <div className="ture-bnt">
                    <a href="https://calendar.google.com/calendar/u/0/r" className="Schedule-button">Make plan
                    </a>
                    <a href="??" className="Schedule-button">Export PDF/JPG</a>
                  </div>
                  <iframe title="anh dau trang schedule" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FHo_Chi_Minh&bgcolor=%23ffffff&src=MjI1MjEwNTdAZ20udWl0LmVkdS52bg&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19iMWU4YTkwYmEwZTNjOThhYzZjNTE3NDE4ZjU0MzZkYzc1ODFiYzgxNzJkZTNkYmZmZjQzM2EzZmUzMmRkYzJhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y19jbGFzc3Jvb201ZmFmYjczNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23AD1457&color=%230B8043&color=%230047a8" style={{ border: "solid 1px #777" }} width="920" height="500" frameborder="0" scrolling="no"></iframe>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="scrollar-bg">
                    <div className="row row-cols-1 row-cols-md-1 g-4">
                      <div className="d-flex flex-column align-items-stretch flex-shrink-0 rownd">
                        <a href="??" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
                          <span className="fs-5 fw-semibold">Favorite place</span>
                        </a>
                        <div className="scrollar-div">
                          <div className="scrollar-object">
                            <div className="list-group list-group-flush border-bottom scrollarea">
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">Location name</strong>
                                </div>
                                <div className="col-10 mb-1 small">
                                  Brief information of the location.
                                </div>
                              </a>
                              <a href="??" className="list-group-item list-group-item-action py-3 lh-sm">
                                <div className="d-flex w-100 align-items-center justify-content-between">
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
                      <a href="??" className="Schedule-button" role="button">Invite orthers </a>
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
                      <a href="/quicktips" className="Schedule-button">Quick tips </a>
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
          <Footer></Footer>
      </div>
    )
}
export default Schedule