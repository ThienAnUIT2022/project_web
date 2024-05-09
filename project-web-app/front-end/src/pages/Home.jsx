import React from 'react';
import Map from '../components/Map';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/home.css';
import images from '../assets/images';
import PopularDestinations from '../components/PopularDestination';

const destinations = [
    {
      imageSrc: "PopDes1.jpg",
      title: "Coastal road 702",
      description:
        "With a length of about 80km connecting Phan Rang to Cam Ranh, this is one of the most beautiful and famous Ninh Thuan coastal roads.",
    },
    {
        imageSrc: "PopDes2.jpg",
        title: "Tà Nung pass",
        description:
        "Belonging to route 725, located on the Langbiang plateau of Da Lat, Ta Nung pass brings the wild beauty of the mountains and forests.",
    },
    {
        imageSrc: "PopDes3.jpg",
        title: "Mã Pí Lèng pass",
        description:
        "Located on National Highway 4C, the road connecting Ha Giang city with Dong Van town, is considered the king of passes.",
    },
    {
        imageSrc:"PopDes4.jpg",
        title:"Hàm Ninh fishing village",
        description:
        "Located in Phu Quoc district, Kien Giang province, it possesses wild and peaceful beauty, suitable for watching the sea and enjoying many fresh seafood dishes.",
    },
    {
        imageSrc:"PopDes5.jpg",
        title:"Bạc Liêu Wind Power Field",
        description:"About 20km from Bac Lieu city center, it is considered one of the largest wind power projects in Vietnam. Bringing a modern scene no less than Europe.",
    },
    {
        imageSrc:"PopDes6.jpeg",
        title:"Sim flower hill in Da Lat",
        description:"Each year, sim flowers bloom around March - April and around October - November. The weather is cool and the scenery is romantic and poetic, suitable for recording memories.",
    }

  ];

function Home() {
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

                {/* <div className="album py-5 bg-light">
                    <div className="container">
                       <div className="row mb-2">
                        <div className="col-md-12 text-center mb-5">
                        <h1>Popular destinations</h1>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="card-img-top" src={images['PopDes1.jpg']} alt="" />
                                <div className="card-img-overlay">
                                <h4 className="card-title">Coastal road 702</h4>
                                </div>
                                <div className="card-body">
                                <p className="card-text">
                                    With a length of about 80km connecting Phan Rang to Cam
                                    Ranh, this is one of the most beautiful and famous Ninh
                                    Thuan coastal roads.
                                </p>
                                <div className="d-flex flex-row-reverse">
                                    <a href="/destination">
                                    <button type="button" className="btn btn-sm btn-secondary">
                                        See more
                                    </button>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                        <div className="card shadow-sm">
                            <img className="card-img-top" src={images['PopDes2.jpg']} alt="" />
                            <div className="card-img-overlay">
                            <h4 className="card-title">Tà Nung pass</h4>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Belonging to route 725, located on the Langbiang plateau of
                                Da Lat, Ta Nung pass brings the wild beauty of the mountains
                                and forests.
                            </p>
                            <div className="d-flex flex-row-reverse">
                                <a href="/destination">
                                <button type="button" className="btn btn-sm btn-secondary">
                                    See more
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col">
                        <div className="card shadow-sm">
                            <img className="card-img-top" src={images['PopDes3.jpg']} alt=""/>
                            <div className="card-img-overlay">
                            <h4 className="card-title">Mã Pí Lèng pass</h4>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Located on National Highway 4C, the road connecting Ha Giang
                                city with Dong Van town, is considered the king of passes.
                            </p>
                            <div className="d-flex flex-row-reverse">
                                <a href="/destination">
                                <button type="button" className="btn btn-sm btn-secondary">
                                    See more
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col">
                        <div className="card shadow-sm">
                            <img className="card-img-top" src={images['PopDes4.jpg']} alt="" />
                            <div className="card-img-overlay">
                            <h4 className="card-title">Hàm Ninh fishing village</h4>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Located in Phu Quoc district, Kien Giang province, it
                                possesses wild and peaceful beauty, suitable for watching
                                the sea and enjoying many fresh seafood dishes.
                            </p>
                            <div className="d-flex flex-row-reverse">
                                <a href="/destination">
                                <button type="button" className="btn btn-sm btn-secondary">
                                    See more
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col">
                        <div className="card shadow-sm">
                            <img className="card-img-top" src={images['PopDes5.jpg']} alt="" />
                            <div className="card-img-overlay">
                            <h4 className="card-title">Bạc Liêu Wind Power Field</h4>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                About 20km from Bac Lieu city center, it is considered one
                                of the largest wind power projects in Vietnam. Bringing a
                                modern scene no less than Europe.
                            </p>
                            <div className="d-flex flex-row-reverse">
                                <a href="/destination">
                                <button type="button" className="btn btn-sm btn-secondary">
                                    See more
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col">
                        <div className="card shadow-sm">
                            <img className="card-img-top" src={images['PopDes6.jpeg']} alt="" />
                            <div className="card-img-overlay">
                            <h4 className="card-title">Sim flower hill in Da Lat</h4>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Each year, sim flowers bloom around March - April and around
                                October - November. The weather is cool and the scenery is
                                romantic and poetic, suitable for recording memories.
                            </p>
                            <div className="d-flex flex-row-reverse">
                                <a href="/destination">
                                <button type="button" className="btn btn-sm btn-secondary">
                                    See more
                                </button>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
                <PopularDestinations destinations={destinations} />
            
                <div className="container">
                    <hr className="featurette-divider" />
                    <Map/>
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