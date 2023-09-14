import React, { useState, useEffect } from 'react'
import {client} from '../../client'
import { useParams} from 'react-router-dom'

const ShowTime = () => {

    const [values, setValues] = useState();
  const {slug, type} = useParams();

    useEffect(() => {
        client.fetch(
          `*[_type == "showtimes" && movie[] -> slug.current match '${slug}' && location[] -> city match '${type}'  ]
          {
            time
          }`
        ).then((data) => setValues(data)).catch(console.error)
      }, [slug, type])

      console.log(values);

  return (
    <div>ShowTime</div>
  )
}

export default ShowTime