import React, { useEffect } from 'react'
import '../Style/video.css'
import { useState } from 'react';



const Video = ({data}) => {

  let [videoUrl, setVideo] = useState('../src/video/Day.mp4');
  let [Hour, setHour] = useState('5');



   useEffect(()=>{
       if(data != "false"){
        Hour = data.realTime.split(" ")[1].slice(0,2) ;
        setHour(Hour) ;
    }
   })


 
   useEffect(()=>{

        if( Hour >= 5 && Hour <= 16 ){
            setVideo('../src/video/Day.mp4') ;
        }
        else if( Hour > 16 &&   Hour <=18){
            setVideo('../src/video/Evening.mp4') ;
        }
        else{
            setVideo('../src/video/night-sky.mp4') ;
        }
 

   },[Hour]) ;


     
  

  
  
  
  
  return (
      <>
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        className="video"
        src={videoUrl}
        />
    </div>
    </>
  )
}
  

export default Video