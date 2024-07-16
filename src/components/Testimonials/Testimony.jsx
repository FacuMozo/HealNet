import React from 'react'
import './Testimony.scss'

const Testimony = ({text,autor,imagen}) => {
  return (
    <div>
      <div className='card-border'>
        <div className='testimony-card'>
          <img src={imagen} alt="" />
          <div className='d-flex flex-column'>
            <p >{text}</p>
            <p className='autor'>{autor}</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony