import React from 'react'
import './StaffCard.scss'

import phoneIcon from '../../images/Staff/Phone.png'

const StaffCard = ({ name, profession, description, image,image2 }) => {
    return (
        <>
            <div className='staff-card'>
                <div className='image '>
                    <img src={image} alt="" />
                </div>
                <div className='card-body '>
                    <h3>Dr. {name} ({profession})</h3>
                    <p>{description}</p>
                    <img className="sm-image" src={image} alt="" />
                    <button><span>Book appointment</span> <img src={phoneIcon} alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default StaffCard