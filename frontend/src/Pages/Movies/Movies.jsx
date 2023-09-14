import React, { useState, useEffect } from 'react'
import {client} from '../../client'
import {Link} from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';

const Movies = () => {

    const [values, setValues] = useState();

    useEffect(() => {
        client.fetch(
          `*[_type == "movie"] | order(_createdAt desc)
          {
            title,
            slug,
            poster_path,
            overview,
            original_language,
            genre,
            ratings,
          }`
        ).then((data) => setValues(data)).catch(console.error)
      }, [])

  return (
    <div className="movie-list-container">
    <div className="movie-list-heading">
      <h2>Premiering Now</h2>
    </div>
    <div className="products-container">
        {values?.map((movie) => (
          <article className="product-card"> 
          <Link to={`/movie/${movie.slug.current}`} className='blog_button'>
            <img src={movie.poster_path} alt={movie.title} width={300} height={300} className='product-image'/>
            </Link>
            <p className='ratings'><AiFillStar style={{color: "red",paddingLeft:"5px", marginLeft:"5px"}}/> {movie.ratings} / 10 <span>IMDB Ratings</span></p>
            <p className="product-name">{movie.title}</p>
            <p>{movie.genre}</p>
            <p>{movie.original_language}</p>
          </article>
        ))}
      </div>
  <div className="yellow_border"></div>
  </div>
  )
}

export default Movies