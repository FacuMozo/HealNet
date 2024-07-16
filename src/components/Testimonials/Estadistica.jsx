import React from 'react'
import './Estadistica.scss'

const Estadistica = ({stat, informacion}) => {
  return (
      <div className='estadistica'>
          <h2 className='text-gradient'>{stat}</h2>
          <p>{informacion}</p>
      </div>
  )
}

export default Estadistica