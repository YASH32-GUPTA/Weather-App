import React from "react"
import Weather from "./components/weather.jsx"
import './Style/mainBody.css'



function App() {
  return (
    <>  
       <div className="mainBody">
             <div className="dynamicBackground">
                    <Weather/>
             </div>
       </div>
    </>
  )
}

export default App  
