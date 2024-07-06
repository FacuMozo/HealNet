import React from 'react';
import './AppointmentForm.scss';

const AppointmentForm = () => {
    return (
        <section className="appointment-form">
            <div className="container">
                <h2>Make an Appointment</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <select id="email" className="form-control">
                            {/* Options fetched from API */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" className="form-control" />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default AppointmentForm;
