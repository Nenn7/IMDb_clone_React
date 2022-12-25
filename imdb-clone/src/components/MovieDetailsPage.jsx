import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetailsPage() {
 let { id } = useParams();
 const [movie, setMovie] = useState([]);
 const apiKey = "7f2aa4fd5b9d106699f3a44a4da03c3c"

 useEffect(() => {
  async function getMovieDetails() {
   const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
   const movieData = await response.json()

  setMovie(movieData);
  }

  getMovieDetails();
 },[id])


  return (
    <>
     <h3>{movie.title}</h3>
    </>
  )
}

export default MovieDetailsPage