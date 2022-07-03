import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl}from "../../constants/constants"

function Banner() {
  const [movie,setMovie]=useState()
  let x = Math.floor((Math.random() * 20) + 1);
useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[x])
    console.log(x)
    setMovie(response.data.results[x])
  })
},[])
  return (
    
    <div className='banner'
    style={{ backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})` }}
    >  
   
      <div className='content'>
        <h1 className='title'>{movie ? movie.title:"movie"}</h1>
        <div className='banner_buttons'>
          <button className='button'>play</button>
          <button className='button'>mylist</button>
        </div>
        <div>
          <h1 className='description'>{movie ? movie.overview :" overview"} </h1>
        </div>
        
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
