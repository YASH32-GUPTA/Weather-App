import React, { useState } from 'react'

// Imports 
import '../Style/Search.css'
import API from '../API_KEY';
import axios from 'axios';

// Icons  
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


// UI 
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Search = ({setData , setPlace ,setTime }) => {

  let [search , setSearch ] = useState('');
  let [backDrop , setBackDrop ] = useState(false) 

  async function getWeatherInformation(){

    try{
      let Data = (((await axios.get(API+search)).data)) 
      if( Data != null ){
        
        let result = {
          temp : Data.current.temp_c,
          condition :  Data.current.condition.text , 
          humidity :Data.current.humidity , 
          feelsLike : Data.current.feelslike_c, 
          windDirection :Data.current.wind_dir , 
          gust : Data.current.gust_kph , 
          headIndex : Data.current.heatindex_c ,
          Visibilty :  Data.current.vis_km,
          DewPoint : Data.current.dewpoint_c ,
          WindSpeedKPH : Data.current.wind_kph,
          WindChill : Data.current.windchill_c ,
          UV : Data.current.uv ,
          realTime : Data.current.last_updated
        }
        
        
        
        
      // console.log(result.realTime)
      setBackDrop(false) ;
      setPlace(search) ;
      setData(result) ;
      
      }

    }
    catch(err){
       setBackDrop(false) ;
        setData('') ;
        setPlace('false') ;
    }
    // Transfering Data : 

  }

 
  function handleSumbit(event){
    event.preventDefault() ;  
    setSearch(search) ; 
    setSearch(' ') ;
    setBackDrop(true) ;
    getWeatherInformation() ;

  }

  const handleChange = (event)=>{
    setSearch(event.target.value) ;
  }


  function Loader(){
    return (
       <>
        <Backdrop 
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color="inherit" />
        </Backdrop>
       </>
    )
  }




  return (
    <div className='weather-Box'>

        {/* Screen -  Loader   */}
        { backDrop  == true ?  Loader() : null } 

       
        <div className="header">
            <h1>Weather App</h1>
        </div>
        

    <div className="SearchBar formBox">

      <form onSubmit={handleSumbit} className='formContent'>
        <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
    <span className='textField'>
    <TextField
      fullWidth
      id="City"
      placeholder='City'
      variant="outlined"
      value={search}
      onChange={handleChange}
      required
      sx={{
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: '#ccc !important',
            borderWidth: '1px',
            borderRadius: '5px',
          },
        },
        '& .MuiInputBase-input': {
          '&:hover': {
            borderColor: '#ccc !important',
            borderWidth: '1px',
            borderRadius: '5px',
          },
        },
      }}
    />
    </span>
  </Box>

            <span className='buttonSearch'><Button variant="filled" endIcon ={<SearchIcon/>} type='Sumbit'>Search</Button></span>

        </form>

        </div>
       

    </div>
  )
}

export default Search