import React, { useState, useEffect } from 'react';
import email from '../../images/iconos/email.png';
import calendar from '../../images/iconos/calendar.png';
import phone from '../../images/iconos/phone.png';
import check from '../../images/iconos/check.png';
import './AppointmentForm.scss';

const AppointmentForm = () => {
    const [emails, setEmails] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [currentDate, setCurrentDate] = useState('');

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

    useEffect(() => {
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 16); // Formato 'YYYY-MM-DDTHH:MM'
        setCurrentDate(formattedDate);
    }, []);

    const validatePhoneNumber = (number) => {
        const argentinianPhoneRegex = /^\+54\d{9,12}$/;
        if (argentinianPhoneRegex.test(number)) {
            setPhoneError('');
            return true;
        } else {
            setPhoneError('Invalid phone. Enter an Argentinian number with the format +54XXXXXXXXXX');
            return false;
        }
    };

    const handlePhoneChange = (e) => {
        const number = e.target.value;
        setPhoneNumber(number);
        // Restablecer el error cuando el usuario empiece a escribir
        if (phoneError) {
            validatePhoneNumber(number);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePhoneNumber(phoneNumber)) {
            console.log('Formulario enviado');
            // Limpiar el formulario después de enviarlo
            setSelectedEmail('');
            setPhoneNumber('');
            setCurrentDate(new Date().toISOString().slice(0, 16));
            document.getElementById("email").value = "";
            document.getElementById("date").value = "";
        }
    };

    const handleFocus = (e) => {
        e.target.type = 'datetime-local';
        if (!e.target.value) {
            e.target.value = currentDate;
        }
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            e.target.type = 'text';
        }
    };
    const handleEmailChange = (event) => {
        setSelectedEmail(event.target.value);
    };

    return (
        <div className='p-0'>
            <div className='appointment-form'>
                <div className="container-card ">
                    <h2 className='text-bold'>Easily book an appointment in 3 simple steps.</h2>
                    <form className='row align-items-end' onSubmit={handleSubmit}>
                        <div className="col-12 col-lg-3 form-group">
                            <label htmlFor="email"><img className='me-2' src={email} alt="" />Email Address</label>
                            <select id="email" className="form-control" value={selectedEmail} onChange={handleEmailChange} required>
                                <option className='placeholder-option' value="" disabled >Enter Your Email Address</option>
                                {emails.map((email, index) => (
                                    <option key={index} value={email}>
                                        {email}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-lg-3 form-group">
                            <div>
                                <label htmlFor="phone"><img className='me-2' src={phone} alt="" />Contact Number</label>
                                {phoneError && <small className="text-danger">{phoneError}</small>}
                            </div>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                required
                            />
                        </div>
                        <div className="col-12 col-lg-3 form-group">
                            <label htmlFor="date"><img className='me-2' src={calendar} alt="" />Date of Appointment</label>
                            <input
                                type="text"
                                placeholder="Select Date of Appointment"
                                min={currentDate}
                                step="1800"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                id="date"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className='col-12 col-lg-3 '>
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={!!phoneError}
                            >
                                <span>Book Now</span><img src={check} alt="" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AppointmentForm;
