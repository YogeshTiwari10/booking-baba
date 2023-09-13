import React, { useState, useEffect } from 'react'
import {client} from '../../client'

import './Home.scss'
import Typewriter from 'typewriter-effect'
import walkingMan from '../../assets/walking-man.gif'

const Home = () => {

    const [values, setValues] = useState();

    useEffect(() => {
        client.fetch(
          `*[_type == "movie"]
          {
            title,
            poster_path,
            overview,
            original_language,
            genre,
            ratings,
          }`
        ).then((data) => setValues(data)).catch(console.error)
      }, [])
  return (
    <div className="home">
        <div className="home-banner-container">
        <div className="home-banner"></div>
        <div className="banner-heading">
          <p>Your Ticket to Blockbuster Bliss:</p>
          <div className='typewriter'>
            <Typewriter className="abc"
          options={{
            strings: ['Book Movies Online Now!', ' Experience Blockbusters like Never Before!', 'Lights, Camera, Action!'],
            autoStart: true,
            loop: true,
          }}
        />
          </div>
        </div>
        <img src={walkingMan} alt="walking man" className='walking-man' />
      </div>
        <div>
        {values?.map((movie) => (
              <div>
                <h1>{movie.title}</h1>
              {/* <img src={movie.poster_path} alt={movie.title} /> */}
              <p>{movie.overview}</p>
              <p>{movie.genre}</p>
              <p>{movie.ratings}</p>
              </div>
          ))}
        </div>
    </div>
  )
}

export default Home