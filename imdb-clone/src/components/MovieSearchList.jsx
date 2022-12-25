import React from 'react'
import './movieList.css'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import MovieHeader from './MovieHeader'

function MovieSearchList(props) {

  return (
    <>
     <MovieHeader heading="Search Movies..." />
    <div className='movieContainer'>
      {Array.isArray(props.movies) ? 
        props.movies.map((movie) => (
          <Link 
        to={`/movies/${movie.id}`}
        key={movie.id}>
        <div key={movie.id} className='movieCard'>
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}alt="poster" />
          <p><AiFillStar color='var(--color-primary)'/>{movie.vote_average}</p>
          <h4>{movie.title}</h4>
        </div></Link>)): <div> nothing here </div>}

      </div>
    </>
  )
}

export default MovieSearchList