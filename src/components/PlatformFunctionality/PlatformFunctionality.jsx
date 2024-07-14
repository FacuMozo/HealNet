import React from 'react';
import './PlatformFunctionality.scss';
import Functionality from './Functionality';

import star from '../../images/iconos/star.png'
import FuncImg from '../../images/Functionalities.png'

const PlatformFunctionality = () => {
    const p1 = "Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.";
    const p2 = "Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.";
    const p3 = "Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.";

    return (
        <section className="platform-functionality">
            <div className="func-container">
                <div className='section-header'>
                    <h2>How <span className='text-gradient'>our platform</span> works</h2>
                    <p className=' p-0'> Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance:</p>
                </div>
                <div className='container-body d-flex flex-lg-row flex-column'>
                    <div className="features order-2 order-lg-1">
                        <Functionality number="1" title="Create Your Profile" paragraph={p1}/>
                        <Functionality number="2" title="Choose Your Service" paragraph={p2} />
                        <Functionality number="3" title="Meet Your Doctor" paragraph={p3} />
                        
                    </div>
                    <div className='imagen order-1 order-xl-2'>
                        <img src={FuncImg} className="back-img" alt="" />
                        <div className="star-card">
                            <img className="star-icon" src={star} alt="" />
                            <p className="text-bold highlight-text p-0 m-0">Best Certified Team of Specialists</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlatformFunctionality;
