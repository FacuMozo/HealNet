import React from 'react';
import './ServicesSection.scss';
import calendar from '../../images/iconos/services/calendar.png'
import medicalNote from '../../images/iconos/services/medicalNote.png'
import medicine from '../../images/iconos/services/medicine.png'
import online from '../../images/iconos/services/online.png'
import prescription from '../../images/iconos/services/prescription.png'
import ondas from '../../images/iconos/services/ondas.png'

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                <h2>Top <span className='text-gradient'>services</span> we offer</h2>
                <p>In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:</p>
                <div className="services">
                    <img src={ondas} className="onda-1" alt="" />
                    <img src={ondas} className="onda-2" alt="" />
                    <div className='card-border card-1'>
                        <div className="service-card">
                            <img src={online} className='icon' alt="" />
                            <h3>Online Consultations</h3>
                            <p>Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.</p>
                        </div>
                    </div>
                    <div className='card-border card-2'>
                        <div className="service-card ">
                            <img src={calendar} className='icon' alt="" />
                            <h3>Booking Appointments</h3>
                            <p>Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.</p>
                        </div>
                    </div>
                    <div className='card-border card-3'>
                        <div className="service-card">
                            <img src={prescription} className='icon' alt="" />
                            <h3>Prescriptions</h3>
                            <p>Receive and renew prescriptions digitally after your consultation with our specialists .</p>
                        </div>
                    </div>
                    <div className='card-border card-3'>
                        <div className="service-card ">
                            <img src={medicalNote } className='icon' alt="" />
                            <h3>Medical Notes</h3>
                            <p>Obtain necessary medical notes for work or school with only a few clicks of hassle.</p>
                        </div>
                    </div>
                    <div className='card-border card-3'>
                        <div className="service-card ">
                            <img src={ medicine} className='icon' alt="" />
                            <h3>Medicine Refills</h3>
                            <p>Skip the pharmacy queues and save time + energy by ordering medicine refills online.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
