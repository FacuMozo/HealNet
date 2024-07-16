import React from 'react';
import './Testimonials.scss';
import '../styles/textGradient.scss'

import Testimony from './Testimony';
import Estadistica from './Estadistica';

import test1 from '../../images/testimony/testimony-1.png'
import test2 from '../../images/testimony/testimony-2.png'
import test3 from '../../images/testimony/testimony-3.png'
import test4 from '../../images/testimony/testimony-4.png'

const Testimonials = () => {
    const text1 = "“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.\”";
    const text2 = "\"Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.\"";
    const text3 = "\"The prescription refill system is a game-changer for managing my diabetes. It’s really efficient and completely hassle-free.\"";
    const text4 = "\"Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.\"";
    return (
        <section className="testimonials">
            <div className="d-flex flex-column">
                <div>
                    <h2><span className='text-gradient'>Patient Testimonials:</span><br /> Hear from Those We’ve Cared For</h2>
                </div>
                <div className="testimonial-cards">
                    <div className='row-1 d-flex'> 
                        <Testimony text={text1} autor="Linda A." imagen={test1}/>
                        <Testimony text={text2} autor="Henry B." imagen={test2} />
                    </div>
                    <div className='d-flex my-4 estadisticas'> 
                        <Estadistica stat="10,000+" informacion="Successful Consultations" />
                        <Estadistica stat="2,500+" informacion="Healthcare Professionals" />
                        
                        <Estadistica stat="98%" informacion="Patient Satisfaction Rate" />
                        <Estadistica stat="200+" informacion="Top Specialists" />
                        
                    </div>    
                    <div className='row-1 d-flex'>
                        <Testimony text={text3} autor="Joshua T." imagen={test3} />
                        <Testimony text={text4} autor="Samanta K." imagen={test4} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
