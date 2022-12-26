import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './movieDetails.css'

function MovieDetailsPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);
  const apiKey = "7f2aa4fd5b9d106699f3a44a4da03c3c";

  useEffect(() => {
    async function getMovieDetails() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
      const movieData = await response.json();

      setMovie(movieData);
    }

    getMovieDetails();
  }, [id]);

  return (
    <>
    <div className="movieDetailsContainer">
      <h1>{movie.title}</h1>
      {movie.backdrop_path ? (
      <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt="poster" />
      ): null}
      <div className="movieGenreContainer">
        {movie.genres ? movie.genres.map((genre) => {
          return <div key={genre.id}>{genre.name}</div>;
        }): null}
      </div>
      <p className="description">{movie.overview}</p>
      <p className="releaseDate">Release Date: {movie.release_date}</p>
      </div>
    </>
  );
}

export default MovieDetailsPage;
