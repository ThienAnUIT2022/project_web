import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/home.css';
import images from '../assets/images';
import PopularDestinations from '../components/PopularDestination';

const Home = ({blogs}) => {
    const sortedBlogs = blogs.data.sort((a, b) => b.attributes.popular - a.attributes.popular);
    const popularBlogs = sortedBlogs.slice(0, 6);

    const popDes = popularBlogs.map(item => ({
        imageSrc: `http://localhost:1337${item.attributes.thumbnail.data.attributes.url}`,
        title: item.attributes.title,
        description: item.attributes.description,
        id: item.id
    }));

    return (
        <div className="Homepage">
            <Header></Header>
            <main>
                <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='d-block w-100 img- ' src={images['carousel_left.jpg']} alt="" />
                        <div className="container">
                            <div className="carousel-caption d-md-block text-start">
                                <h1>What's in your backpack?</h1>
                                <p>We'll help you prepare the necessary things for the trip.</p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="/quicktips">Check now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='d-block w-100' src={images['carousel_mid.jpg']} alt="" />
                        <div className="container">
                            <div className="carousel-caption d-md-block">
                                <h1>Go far away together</h1>
                                <p>
                                Easily search for places, schedule trips, and send invitations
                                to others.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="/destination">Try now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className='d-block w-100' src={images['carousel_right.jpg']} alt="" />
                        <div className="container">
                            <div className="carousel-caption d-md-block text-end">
                                <h1>Many impressive locations</h1>
                                <p>
                                Selected locations are suitable for sightseeing, relaxation or
                                exploration.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="/destination">See more</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <PopularDestinations destinations={popDes} />
            
                <div className="container">
                    <hr className="featurette-divider" />
                </div> 
                
                <div className="advice mb-5">
                    <div className="container">
                    <hr className="featurette-divider" />
                    <div className="row">
                        <div className="col text-center">
                        <h2>Backpacking Travel Advice</h2>
                        <p className="h5 text-secondary mt-2 mb-5">
                            Regardless of your destination and travel style, browse safety
                            tips, practical advice, and ideas to ensure a smooth backpacking
                            trip.
                        </p>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item d-flex flex-row">
                            <div
                                className="advice-icon d-flex justify-content-center align-items-center"
                            >
                                <i className="bi bi-backpack2-fill"></i>
                            </div>
                            <div>
                                <a className="h5 card-text" href="/quicktips">Packing</a>
                                <p className="card-text mt-2 mt-2 pr-2">
                                What to bring on your backpacking trip. Essential
                                clothing, gear, and accessories, and most importantly, how
                                to pack light.
                                </p>
                            </div>
                            </li>
                            <li className="list-group-item d-flex flex-row">
                            <div
                                className="advice-icon d-flex justify-content-center align-items-center"
                            >
                                <i className="bi bi-house-fill"></i>
                            </div>
                            <div>
                                <a className="h5 card-text" href="/quicktips"
                                >Hostel Advice</a>
                                <p className="card-text mt-2 pr-2">
                                How to find the perfect hostel, break the ice with fellow
                                travelers, and what to bring.
                                </p>
                            </div>
                            </li>
                            <li className="list-group-item d-flex flex-row">
                            <div
                                className="advice-icon d-flex justify-content-center align-items-center"
                            >
                                <i className="bi bi-fuel-pump-fill"></i>
                            </div>
                            <div>
                                <a className="h5 card-text" href="/quicktips"
                                >Fuel/Diesel</a>
                                <p className="card-text mt-2 pr-2">
                                Regularly pay attention to the vehicle's remaining fuel
                                and the location of gas stations along the way. See routes
                                with sparse gas stations.
                                </p>
                            </div>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item d-flex flex-row">
                            <div
                                className="advice-icon d-flex justify-content-center align-items-center"
                            >
                                <i className="bi bi-exclamation-octagon-fill"></i>
                            </div>
                            <div>
                                <a className="h5 card-text" href="/quicktips"
                                >Travel Risk</a>
                                <p className="card-text mt-2 pr-2">
                                How to give first aid and seek help in case of an
                                accident. Types of insurance you should use.
                                </p>
                            </div>
                            </li>
                            <li className="list-group-item d-flex flex-row">
                            <div
                                className="advice-icon d-flex justify-content-center align-items-center"
                            >
                                <i className="bi bi-wifi"></i>
                            </div>
                            <div>
                                <a className="h5 card-text" href="/quicktips"
                                >Mobile Phone Usage</a>
                                <p className="card-text mt-2 pr-2">
                                Instructions and tips for using your phone when traveling
                                to remote areas. Detailed information about coverage area,
                                wifi support and battery backup.
                                </p>
                            </div>
                            </li>
                            <li className="list-group-item d-flex flex-row">
                            <div
                                className="advice-icon d-flex justify-content-center align-items-center"
                            >
                                <i className="bi bi-cash-coin"></i>
                            </div>
                            <div>
                                <a className="h5 card-text" href="/quicktips">Budget</a>
                                <p className="card-text mt-2 pr-2">
                                How to make the trip full of experience while still saving
                                money. Take advantage of online services and promotions.
                                </p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Home;