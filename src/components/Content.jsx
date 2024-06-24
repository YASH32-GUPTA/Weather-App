import React, { useState } from 'react' ;
import '../Style/Content.css' ;


// import 
import WindStatusBar  from './WindStatusBar.jsx';
import RightContent from './RightContent.jsx';
import QuicksBox from './QuicksBox.jsx';

// icons : 
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Content = ({Data , place}) => {
  
  

  return (
    <div className='mainContent'>   

        {/* Header Status !  */}


            <div className="state">
                <h2>{place}</h2>
            </div>

            <div className="status">
                    <div className="degree">
                         <h1 className='degreeFont'>{Data.temp}&deg;C</h1>
                    </div>

                    <div className="rightContent">
                            <div className="upperContent uniColor">
                            <span>{Data.condition}</span>
                            </div>
                            <div className="lowerContent uniColor">
                            <span>H:{Data.headIndex}&deg; &nbsp;D:{Data.DewPoint}&deg;</span>
                            </div>
                    </div>
            </div>


            <div className="weatherInfo">
                
                <div className="leftMainStatus">

                <div className="contentWrapper">

                {/* Wind Status */} 
                <WindStatusBar Icon={CloudQueueIcon} title={"Wind"} idx={0} Data = {Data} />
                <WindStatusBar Icon={CompareArrowsIcon} title={"Direction"} idx={1} Data  = {Data}/>

                </div>

                </div>

                {/* Right Content  */}
                <RightContent Icon={WbSunnyIcon} title={"UV"} idx={1} Data = {Data}/>

            </div>


            {/* Lower Content */}
            <QuicksBox Data = {Data}/>
            
    </div>
  )
}

export {Content} ; 

