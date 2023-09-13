import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import {client} from '../../client'
import { AiFillStar } from 'react-icons/ai';
import { PiDotOutlineFill } from 'react-icons/pi';

import './SingleMovies.scss'

const SingleMovies = () => {

    const {slug} = useParams();
    const [movies, setMovies] = useState();

    useEffect(() => {
        client.fetch(
          `*[slug.current == '${slug}'] 
            {
                title,
                slug,
                poster_path,
                overview,
                length,
                original_language,
                release_date,
                genre,
                ratings,
              }`
        ).then((data) => setMovies(data[0]))
      }, [slug])

  return (
    <div className="Single_Movie">
        <div className="single_movie_container">
            <div className="movie-poster">
                <img src={movies?.poster_path} alt={movies?.title} />
                <div className='incinemas'></div>
            </div>
            <div className="movie-data">
                <h2 className='movie-title'>{movies?.title}</h2>
                <p className="movie-plot">{movies?.overview}</p>
                <p className='movie-rating'><AiFillStar style={{color: "red",marginRight:"5px", marginLeft:"5px", width:"40px", height:"40px"}}/> {movies?.ratings} / 10 <span style={{margin:"0px 10px"}}> IMDB Ratings</span></p>
                <p className="movie-language">{movies?.original_language}</p>
                <p className='movie-length'>{movies?.length} <PiDotOutlineFill style={{width:"40px", height:"40px"}}/> {movies?.genre} <PiDotOutlineFill style={{width:"40px", height:"40px"}}/> {movies?.release_date}</p>
                <button className='book-btn'>Book Tickets</button>
            </div>
        </div>

    </div>
  )
}

export default SingleMovies