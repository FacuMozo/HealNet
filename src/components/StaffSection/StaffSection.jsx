import React from 'react';
import './StaffSection.scss';

const StaffSection = () => {
    return (
        <section className="staff-section">
            <div className="container">
                <h2>Meet Our Staff</h2>
                <div className="staff-cards">
                    <div className="staff-card">
                        <img src="staff1.jpg" alt="Staff 1" />
                        <h3>Dr. John Doe</h3>
                        <p>Cardiologist</p>
                    </div>
                    <div className="staff-card">
                        <img src="staff2.jpg" alt="Staff 2" />
                        <h3>Dr. Jane Smith</h3>
                        <p>Dermatologist</p>
                    </div>
                    <div className="staff-card">
                        <img src="staff3.jpg" alt="Staff 3" />
                        <h3>Dr. Robert Johnson</h3>
                        <p>Neurologist</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StaffSection;
