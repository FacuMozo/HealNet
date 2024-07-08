import React, { useState, useEffect } from 'react';
import email from '../../images/iconos/email.png'
import calendar from '../../images/iconos/calendar.png'
import phone from '../../images/iconos/phone.png'
import './AppointmentForm.scss';

const AppointmentForm = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        fetch('https://dummyapi.online/api/users')
            .then((response) => response.json())
            .then((data) => {
                const emailOptions = data.map(user => user.email);
                setEmails(emailOptions);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        // <section className=" m-0">
        <div className='container  p-0'>   
            <div className='appointment-form'>
                <div className="container">
                    <h2 className='text-bold'>Easily book an appointment in 3 simple steps.</h2>
                    <form className='row'>
                        <div className="col form-group">
                            <label htmlFor="email"><img className='me-2' src={email} alt="" />Email</label>
                            <select id="email" className="form-control" required>
                                <option className='placeholder-option' value="" disabled selected>Enter Your Email Address</option>
                                {emails.map((email, index) => (
                                    <option key={index} value={email}>
                                        {email}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col form-group">
                            <label htmlFor="phone"><img className='me-2' src={ phone} alt="" />Phone</label>
                            <input type="text" id="phone" className="form-control" placeholder="Enter your phone number" />
                        </div>
                        <div className="col form-group">
                            <label htmlFor="date"><img className='me-2' src={calendar} alt="" />Date</label>
                            <input type="date" id="date" className="form-control" />
                        </div>
                        <div className='col'>
                            <button type=" submit" className="submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // </section>
    );
}

export default AppointmentForm;
