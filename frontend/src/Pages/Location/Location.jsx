import React, { useState, useEffect } from 'react'
import {client} from '../../client'
import { Link, useParams} from 'react-router-dom'


import './Location.scss'

import location from '../../assets/location.png'

const Location = () => {

  const [values, setValues] = useState();
  const {slug} = useParams();

    useEffect(() => {
        client.fetch(
          `*[_type == "location" && movie[] -> slug.current match '${slug}']
          {
            city,
            image,
            theatre,
            movie[] -> {title, slug},
          }`
        ).then((data) => setValues(data)).catch(console.error)
      }, [slug])
  return (
    <div className="location">
      <div className="location-banner">
        <h2>Select Your City</h2> <img src={location} alt="location" />
      </div>

      <div className="location-data">

              <div className="products-container1">
              {values?.map((location) => (
                <article className="product-card1"> 
                <Link to={`/showtime/${slug}/${location.city}`} className='blog_button' style={{textDecoration:"none"}}>
                  <img src={location.image} alt={location.city} width={300} height={300} className='product-image1'/>
                  <p className="product-name1">{location.theatre}</p>
                  <p className="product-name1">{location.city}</p>
                  </Link>
                </article>
              ))}
            </div>
            <div className="yellow_border1"></div>
      </div>
    </div>
  )
}

export default Location