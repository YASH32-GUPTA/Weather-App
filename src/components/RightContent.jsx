import React, { useEffect, useState } from 'react'

import '../Style/Content.css' ;
import WeatherTitle from './weatherTitle.jsx';

// Ui And Icon's : 
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const RightContent = ({Icon , title , Data ,idx = -1 }) => {


   let [ setValue ,setUvInput ] = useState(0) ;


   useEffect(()=>{
    setUvInput(()=>{
       return Data.UV * 10
    }) ;
   },[Data.UV ])


   function UvDescriber(value){

    if( value <= 2 ){
      return <span>Moderate</span> ;
    }
    else if( value >2  && value  <=5 ){
      return <span>Intense</span> ;
    }
    else{
      return <span>Extreme</span> ;
    }


   }
   function UvDectector(value){

      if( value <= 2 ){
        return <span style={{color : "green"}}>Safe</span> ;
      }
      else if( value >2  && value  <=5 ){
        return <span style={{color : "yellow"}}>Medium</span> ;
      }
      else{
        return <span style={{color : "red"}}>Harmful</span> ;
      }

   }

   function valuetext(value) {
     return `${value}°C`;
   }
      
  return (
    <div className="leftContainer FixContainerheight mainbackColor curve rightResponsive" 
    style={ idx == 1 ? {width : "160px" , marginLeft : "1.5%"} : null } >

    {/* header  */}
    <WeatherTitle Icon={Icon} title={title}/>
   
    <div className="windStructure uniColor">

           <span className='windFont'>{Data.UV}</span>
           <div className="windContentUpper">
               {UvDectector(Data.UV)}
               {UvDescriber(Data.UV)}
           </div>
    </div> 
    {/* { setValue == 0 ? setUvInput(Data.UV * 10) : null } */}
    <div className="valueUV">

    <Box sx={{ width: 150 }}>
      <Slider
        aria-label="Temperature"
        value={setValue}
        getAriaValueText={valuetext}
        color="error"
        sx={{
          '& .MuiSlider-thumb': {
            width: 12, // Adjust the size of the slider thumb
            height: 12 , // Adjust the size of the slider thumb
            pointerEvents: 'none', // Prevent the thumb from being movable
            backgroundColor: '#fff', // Ensure the t  humb is colored with the error color
          },
          '& .MuiSlider-track': {
            height: 4, // Adjust the height of the slider track if needed
            border : "none" ,
            backgroundColor : "Transparent"
          },
          '& .MuiSlider-rail': {
            height: 5, // Adjust the height of the slider rail if needed
            background: 'linear-gradient(to right, green 20%, yellow 40%, yellow 60%, red 70%)', // Same gradient for the rail

          },
        }}
        disabled // Disable the slider to prevent movement
      />
    </Box>
    </div>

    </div>
  )
}

export default RightContent