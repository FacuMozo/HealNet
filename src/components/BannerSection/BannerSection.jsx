import React from 'react';
import './BannerSection.scss';
import '../styles/textGradient.scss'
import arrow from '../../images/iconos/Intersect.png'
import amazon from '../../images/companys/amazon.png'
import apple from '../../images/companys/apple.png'
import google from '../../images/companys/google.png'
import slack from '../../images/companys/slack.png'
import notion from '../../images/companys/notion.png'
import spotify from '../../images/companys/spotify.png'
import BannerDoctor from '../../images/BannerDoctor.png'
import Reviews from '../../images/Reviews.png'
import comillas from '../../images/comillas.png'
import star from '../../images/iconos/star.png'

const BannerSection = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="column-1">
                    <h1>Your <span className='gradient'>trusted partner</span> in digital healthcare.</h1>
                    <p><span className='text-bold'>Empowering Your Health at Every Step.</span> Experience personalized medical care from the comfort of your home. Connect with <span className='text-bold'>certified doctors,</span> or manage prescriptions, and schedule appointments with ease. Ready to take control of your health? <span className='text-bold'>Get Started</span> or Book an Appointment today.</p>
                    <button className="btn-book-appointment"><span>Book an appointment</span><img src={arrow} alt=">" /></button>
                    <div>
                        <p className='info'>Trusted by millions across the globe:</p>
                        <div className="info-icons">
                            <img src={amazon} alt="" />
                            <img src={apple} alt="" />
                            <img src={google} alt="" />
                            <img src={notion} alt="" />
                            <img src={spotify} alt="" />
                            <img src={slack} alt="" />
                        </div>
                    </div>
                </div>
                <div className="column-2">
                    <img className="back-img" src={BannerDoctor} alt="Doctor" />
                    <div className='review-border-gradient'>
                        <div className="review-card">
                            <img className="img-reviews" src={Reviews} alt="Card" />
                        </div>
                    </div>
                    <div className="star-card">
                        <img className="star-icon" src={star} alt="" />
                        <p className="text-bold highlight-text p-0 m-0">Easy Appointment Booking</p>
                    </div>
                    <div className='text-border-gradient'>
                        <img src={comillas} alt="" className='icon' />
                        <div className="text-card">
                            <p className="text p-0 m-0">Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing elit doloras. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
