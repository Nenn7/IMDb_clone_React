import React from 'react'
import './movieHeader.css'

function MovieHeader(props) {
  return (
    <div className='movieHeader'>
     <h1>{props.heading}</h1>
    </div>
  )
}

export default MovieHeader