import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/quicktips.css';

function Quicktips() {
    return (
        <div className="Tipspage">
            <Header></Header>
            <div className='container'>
                <hr/>            
                <div className="container">
                    <h1 className="text-center my-5">Quick Tips for Backpackers</h1>
                    
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Packing</h5>
                            <p className="card-text">
                                <strong>Essential Clothing:</strong> When hitting the trails, prioritize moisture-wicking shirts, quick-drying pants, and insulating layers to stay comfortable in various weather conditions.
                            </p>
                            <p className="card-text">
                                <strong>Gear and Accessories:</strong> Opt for lightweight and durable essentials like a quality backpack, sleeping bag, tent, and cooking equipment to minimize weight without sacrificing functionality.
                            </p>
                            <p className="card-text">
                                <strong>Packing Light:</strong> Embrace the art of minimalism by selecting versatile items and avoiding unnecessary gear. Pack efficiently to reduce bulk and enjoy a more agile and enjoyable backpacking experience.
                            </p>
                        </div>
                    </div>
                    
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Hostel Advice</h5>
                            <p className="card-text">
                                <strong>Finding the Perfect Hostel:</strong> While not addressing hostels specifically, consider selecting campsites or backcountry shelters strategically, ensuring safety and proximity to natural wonders.
                            </p>
                            <p className="card-text">
                                <strong>Breaking the Ice:</strong> Cultivate camaraderie with fellow travelers by practicing hiking etiquette and fostering connections through shared experiences, whether on the trail or in communal settings.
                            </p>
                            <p className="card-text">
                                <strong>What to Bring:</strong> Prioritize essentials like navigation tools, safety gear, and emergency supplies, ensuring you're prepared for any adventure that comes your way.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Fuel/Diesel</h5>
                            <p className="card-text">
                                <strong>Monitoring Fuel Levels:</strong> While our focus is backpacking, drawing parallels to vehicle travel underscores the importance of planning food and water supplies meticulously for sustained energy on the trail.
                            </p>
                            <p className="card-text">
                                <strong>Route Planning: </strong> Strategize routes and identify water sources along the trail akin to planning fuel stops, ensuring you're prepared for the journey ahead, no matter how remote.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Travel Risk</h5>
                            <p className="card-text">
                                <strong>First Aid:</strong> Equip yourself with essential first aid items and consider wilderness first aid courses to bolster your preparedness for outdoor adventures.
                            </p>
                            <p className="card-text">
                                <strong>Seeking Help:</strong> Understand emergency procedures and be ready to act swiftly in case of injuries or emergencies, especially when exploring remote and rugged terrain.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Mobile Phone Usage</h5>
                            <p className="card-text">
                                <strong>Coverage Area:</strong> While not explicitly covered, leverage navigation tools and GPS devices for remote travel, ensuring you stay on track even in areas with limited phone coverage.
                            </p>
                            <p className="card-text">
                                <strong>Wi-Fi Support:</strong> Prioritize offline navigation tools and paper maps for areas lacking Wi-Fi, ensuring you remain navigable and connected to your surroundings.
                            </p>
                            <p className="card-text">
                                <strong>Battery Backup:</strong> Carry spare batteries for electronic devices, especially crucial for travelers relying on mobile phones for navigation and communication in remote locales.
                            </p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Budget</h5>
                            <p className="card-text">
                                <strong>Maximizing Experiences:</strong> While not directly addressing budget travel, our tips on selecting affordable gear and maximizing outdoor experiences offer invaluable insights for those seeking adventure without breaking the bank.
                            </p>
                            <p className="card-text">
                                <strong>Online Services and Promotions:</strong> Explore cost-effective options like gear rental services and purchasing used gear to enhance your outdoor adventures while staying within budget constraints.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Quicktips;