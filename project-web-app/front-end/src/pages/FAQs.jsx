import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/FAQs.css';

function FAQs() {
    return (
        <div className='FAQpage'>   
            <Header></Header>
            <section className="section-wrapper faq-help">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-md-offset-1 col-sm-9 col-xs-12">
                            <h2>Frequently Asked Questions</h2>
                            <div className="faq-section" id="registration">
                                <h3>What will happen after I sign up?</h3>
                                <p className="faq-answer bui-f-color-black">Here's how it works:</p>
                                <div className="faq-reg-scheme">
                                    <ul>
                                        <li className="bui-f-color-grayscale">
                                            <span className="bi bi-house"></span>
                                            You sign up for an account and create your listing
                                        </li>
                                        <li className="bui-f-color-grayscale">
                                            <span className="bi bi-calendar"></span>
                                            You can update your calendar and prices, and confirm that your listing is accurate
                                        </li>
                                        <li className="bui-f-color-grayscale">
                                            <span className="bi bi-globe"></span>
                                            When you're ready, you open your property for bookings. In some cases we'll need to verify your location before you can start accepting guests.
                                        </li>
                                    </ul>
                                </div>
                                <p className="faq-answer">
                                    Our team is here to provide advice to get your property up and running, and to help you avoid common mistakes.
                                </p>
                            </div>
                            <div className="faq-section" id="best-deals">
                                <h3>How can I find the best deals on your website for my upcoming trip?</h3>
                                <p className="faq-answer">
                                    To find the best deals for your trip, start by entering your destination and travel dates into our search engine. Then, utilize our filters to narrow down options by price, location, or amenities.
                                </p>
                            </div>
                            <div className="faq-section" id="budget-vacation">
                                <h3>What are some tips for using your website to plan a budget-friendly vacation?</h3>
                                <p className="faq-answer">
                                    Planning a budget-friendly vacation is easy with our website. You can use our "Deals" section to find discounted accommodations and activities, and sign up for our newsletter to receive exclusive offers and promotions.
                                </p>
                            </div>
                            <div className="faq-section" id="contact-support">
                                <h3>How can users contact customer support if they encounter any issues while using your website or during their trip?</h3>
                                <p className="faq-answer">
                                    If you encounter any issues while using our website or during your trip, our customer support team is here to help. You can contact us via phone, email, or live chat for prompt assistance and support.
                                </p>
                            </div>
                            {/* Thêm các câu hỏi và câu trả lời mới dưới đây */}
                            <div className="faq-section" id="reset-password">
                                <h3>How do I reset my password?</h3>
                                <p className="faq-answer">
                                    If you've forgotten your password, you can reset it by clicking on the "Forgot Password" link on the login page. You'll be prompted to enter your email address, and we'll send you instructions on how to reset your password.
                                </p>
                            </div>
                            <div className="faq-section" id="update-account">
                                <h3>How do I update my account information?</h3>
                                <p className="faq-answer">
                                    You can update your account information, including your email address, password, and contact details, by logging into your account and navigating to the "Profile" or "Account Settings" section. From there, you'll be able to edit your information as needed.
                                </p>
                            </div>
                            <div className="faq-section" id="add-remove-guests">
                                <h3>How do I add or remove guests from my booking?</h3>
                                <p className="faq-answer">
                                    To add or remove guests from your booking, you'll need to contact our customer support team for assistance. They'll be able to update your booking details and make any necessary changes to accommodate your request.
                                </p>
                            </div>
                            <div className="faq-section" id="payment-methods">
                                <h3>What payment methods do you accept?</h3>
                                <p className="faq-answer">
                                    We accept a variety of payment methods, including credit cards, debit cards, and online payment platforms. You can choose your preferred payment method during the booking process, and we'll securely process your payment according to our payment policies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default FAQs;
