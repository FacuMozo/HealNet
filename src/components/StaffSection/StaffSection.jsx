import React from 'react';
import './StaffSection.scss';
import '../styles/textGradient.scss'
import StaffCard from './StaffCard';

import doctor1 from '../../images/Staff/Doctor1.png'
import doctor2 from '../../images/Staff/Doctor2.png'
import img from '../../images/Staff/decoration.png'

const StaffSection = () => {
    const p1 = "Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.";
    const p2 = "Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He’s known for his precision and commitment to patient-centered care.";

    return (
        <section className="staff-section">

            <div className='header'>
                <h2><span className='gradient'>Masters of Medicine:</span> <br />Meet our team of specialists</h2>
                <p>Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands:</p>
            </div>

            <div className="staff-cards">
                <img className="img-1" src={img} alt="" />
                <img className="img-2" src={img} alt="" />
                <StaffCard name="Sarah Johnson" profession="Cardiologist" description={p1} image={doctor1} />
                <StaffCard name="Sarah Johnson" profession="Dermatologist" description={p2} image={doctor2} />
            </div>

        </section>
    );
}

export default StaffSection;
