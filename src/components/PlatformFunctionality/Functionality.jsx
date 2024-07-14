import React from 'react'
import './Functionality.scss'

const Functionality = ({ number, title, paragraph }) => {
    return (
        <div className='d-flex flex-row func-container'>
            <div className='func-number  '><span>{number}</span></div>
            <div className='content'>
                <h2 className='text-start'>{title}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default Functionality