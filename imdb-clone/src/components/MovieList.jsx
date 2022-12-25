import React from 'react'
import './movieList.css'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import MovieHeader from './MovieHeader'

function MovieList(props) {

  return (
    <>
    <MovieHeader heading="Popular Movies" />
    <div className='movieContainer'>
      {props.movies.map((movie) => (
        <Link 
        to={`/movies/${movie.id}`}
        key={movie.id}>
        <div key={movie.id} className='movieCard'>
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}alt="poster" />
          <p><AiFillStar color='var(--color-primary)'/>{movie.vote_average}</p>
          <h4>{movie.title}</h4>
        </div>
        </Link>
      ))}
      </div>
    </>
  )
}

export default MovieList