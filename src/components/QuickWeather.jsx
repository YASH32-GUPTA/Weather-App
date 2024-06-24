import React from 'react'
import '../Style/QuickWeather.css' ;



const QuickWeather = ({Icon , title , Data }) => {
 
    function Classifier(title, Data) {
        if (title === "Feels Like") {
          if (Data > 30) {
            return "The temperature is quite high.";
          } else if (Data > 20) {
            return "The temperature is comfortable.";
          } else {
            return "The temperature is on the cooler side.";
          }
        } else if (title === "Humidity") {
          if (Data > 70) {
            return "Humidity makes it feel hotter.";
          } else if (Data > 40) {
            return "Humidity is at a comfortable level.";
          } else {
            return "Humidity is low and dry.";
          }
        } else if (title === "Visibility") {
          if (Data > 10) {
            return "You can see very far.";
          } else if (Data > 5) {
            return "Visibility is quite clear.";
          } else {
            return "Visibility is limited.";
          }
        }
      }
    

    function DataChecker(title){

        if(title === "Feels Like"){
            return <>{Data}&deg;</>
        }
        else if( title === "Humidity"){
            return <>{Data}&#37;</>
        }
        else{
            return <>{Data}km</>
        }
    }


  return (
    <div className='Box uniColor mainbackColor curve'>
        {/* header */}
        <div className="quickHeader quickFont">
            <Icon/>
            <h3>{title}</h3>
        </div>

        {/* Data */}
        <span className='lowerDegree'>{DataChecker(title)}</span>

        {/* Some Info  */}
        <div className="quickInfo">
            <p>{Classifier(title,Data)}</p>
        </div>


    </div>
  )
}

export default QuickWeather