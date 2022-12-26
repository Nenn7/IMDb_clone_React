import MovieList from "./components/MovieList";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieSearchList from "./components/MovieSearchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./components/MovieDetailsPage";
import RecentlyViewed from "./components/RecentlyViewed";
import MovieHeader from "./components/MovieHeader";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const apiKey = "7f2aa4fd5b9d106699f3a44a4da03c3c";

  useEffect(() => {
    async function getMovieData() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      const data = await response.json();

      setMovies(data.results);
    }

    getMovieData();
  }, []);

  useEffect(() => {
    async function searchData(searchTerm) {
      if (searchTerm) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=1&include_adult=false`
        );
        const searchData = await response.json();

        if (searchData.results) {
          setSearchResults(searchData.results);
        }
      }
    }

    searchData(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const toLocalStorage = localStorage.getItem("recentlyViewed");
    if (toLocalStorage) {
      setRecentlyViewed(JSON.parse(toLocalStorage));
    }
  }, []);

  const handleViewed = (movie) => {
    const existingMovie = recentlyViewed.find((m) => m.id === movie.id);
    if (!existingMovie) {
      const updatedRecentlyViewed = [...recentlyViewed, movie];
      setRecentlyViewed(updatedRecentlyViewed);
      localStorage.setItem("recentlyViewed", JSON.stringify(updatedRecentlyViewed));
    }
  };

  return (
    <Router>
      <>
        <Header searchValue={searchTerm} setSearchValue={setSearchTerm} />
        <Routes>
          <Route
            path="/search"
            element={
              <MovieSearchList
                key={searchResults.id}
                movies={searchResults}
                handleViewed={handleViewed}
              />
            }
          />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route
            path="/"
            element={
              <React.Fragment>
                <MovieHeader heading="Popular Movies" />
                <MovieList key={movies.id} movies={movies} handleViewed={handleViewed} />
              </React.Fragment>
            }
          />
          <Route path="/recent" element={<RecentlyViewed />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
