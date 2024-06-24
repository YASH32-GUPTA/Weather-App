import React from 'react'

import '../Style/Content.css'
import WeatherTitle from './weatherTitle.jsx';


const WindStatusBar = ({Icon , title , idx ,Data }) => {
  return (
    <div className="leftContainer FixContainerheight mainbackColor curve" 
    style={ idx == 1 ? {width : "130px" , marginLeft : "1.5%"} : null } >

    {/* header  */}
    <WeatherTitle Icon={Icon} title={title}/>
   
    <div className="windStructure uniColor">

           <span className='windFont'>{idx != 1 ? Data.WindSpeedKPH : Data.windDirection }</span>
           {
            ( idx != 1 ? 
              <div className="windContentUpper">
              <span>KPH</span>
              <span>Wind</span>
              </div> :
              null
            )
           }
    </div>

   

    <div className="windStructure uniColor endline">

       <span className='windFont'>{idx != 1 ? Data.gust : <span>{Data.WindChill}<span>&deg;</span>
       </span> }</span>
       {
            ( idx != 1 ? 
              <div className="windContentUpper">
              <span>KPH</span>
              <span>Wind</span>
              </div> :
               <div className="windContentUpper">
               <span style={{fontSize : "10px"}}>WC</span>
               </div>
            )
           }
   </div>

</div>
  )
}

export default WindStatusBar