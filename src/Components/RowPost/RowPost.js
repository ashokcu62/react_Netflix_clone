
import React, { useEffect, useState } from 'react';
import "./RowPost.css";
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants';



function RowPost(props) {
    const[movie,setMovie]=useState([])
   useEffect(()=>{
    axios.get(props.url).then((response)=>{
        console.log("is_____:",response.data.results)
        setMovie(response.data.results)
    }).catch(err=>{
        alert("network error")
    })
    
   },[])
   
    return (
        
           <div className='row'>
            <h2>{props.title}</h2>
            
            <div className="posters">
             
            {movie.map((obj)=>
            <img   className={props.isSmall ? 'smallPoster':'poster'} src={`${obj ? imageUrl+obj.backdrop_path :""}`} alt="poster" />
            )}
            </div>
            
            
        </div>
          
        
    )
}

export default RowPost
