import React from 'react'
import Search from './Search.jsx'
import '../Style/weather.css' ;
import {Content} from './Content.jsx';
import { useState } from 'react';
import Video from "./video.jsx"
import '../Style/dynamicBackground.css'


const Weather = () => {

  let [data , setData] = useState('') ; 
  let [searchPlace , setPlace ] = useState('') ;

  function emptyScreen(value){

    return (
      <>
         { value == '' ? 
         <h3 className='responsive' style={{color : "#fff"}}>Eg : Delhi , USA , Nepal any Country or City.</h3> : 
         <h3  className='responsive' style={{color : "red"}}>Country or City Not Found ! .</h3>
         }
      </>
    )
  }
  

  return (
    <div className='weatherBody'>
        { (data == '') ? <Video data = {"false"}/> : <Video data = {data}/>}
        <Search setData = {setData} setPlace = {setPlace} />
        {(data != '') ?  <Content Data = {data}  place = {searchPlace}/> : emptyScreen(searchPlace)}
    </div>
  )
}

export default Weather