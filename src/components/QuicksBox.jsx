import React from 'react'
import QuickWeather from './QuickWeather.jsx'

// Icon's 
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import VisibilityIcon from '@mui/icons-material/Visibility';


const QuicksBox = ({Data}) => {
  return (
    <div className='QuickBox'>
        <QuickWeather Icon={DeviceThermostatIcon} title={"Feels Like"} Data = {Data.feelsLike}  />
        <QuickWeather Icon={OpacityIcon} title={"Humidity"} Data = {Data.humidity} />
        <QuickWeather Icon={VisibilityIcon} title={"Visibility"} Data = {Data.Visibilty}/>

    </div>

  )
}

export default QuicksBox