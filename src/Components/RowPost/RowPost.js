
import React, { useEffect, useState, useTransition } from 'react';
import "./RowPost.css";
import YouTube from "react-youtube"
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants';



function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [youtubeUrlId,setYoutubeUrlId] = useState("")
    useEffect(() => {
        axios.get(props.url).then((response) => {
           
            setMovie(response.data.results)
        }).catch(err => {
            alert("network error")
        })

    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    const handleMovieTrailer = (movieId) => {

        console.log("id name", movieId)
        axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log("name",response.data.results[0])
            console.log("key",response.data.results[0])
             if(response.data.results[0].length !== 0){
                setYoutubeUrlId(response.data.results[0])
             }else{
                alert("movie trailer error")
                console.log("trailer is not available")
             }


            })
    }

    return (

        <div className='row'>
            <h2>{props.title}</h2>

            <div className="posters" >

                {movie.map((obj) =>
                    <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${obj ? imageUrl + obj.backdrop_path : ""}`} alt="poster" onClick={() => {
                        handleMovieTrailer(obj.id)
                    }} />
                )}
            </div>
          { youtubeUrlId && <YouTube videoId={youtubeUrlId.key} opts={opts}  />}
           
        </div>


    )
}

export default RowPost
