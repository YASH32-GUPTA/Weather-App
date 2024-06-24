import React from 'react'
import '../Style/Content.css'


const WeatherTitle = ({Icon , title}) => {
  return (
    <div className="windHeader uniColor">
    <span><Icon/></span>
    <h4>{title}</h4>
    </div>
  )
}

export default WeatherTitle