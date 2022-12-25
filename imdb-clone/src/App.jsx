import MovieList from "./components/MovieList";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieSearchList from "./components/MovieSearchList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./components/MovieDetailsPage";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //const [recentlyViewed, setRecentlyViewed] = useState([]);
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
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=1&include_adult=false`
      );
      const searchData = await response.json();

      if (searchData.results) {
        setSearchResults(searchData.results);
      }
    }

    searchData(searchTerm);
  }, [searchTerm]);

  return (
    <Router>
    <>
      <Header searchValue={searchTerm} setSearchValue={setSearchTerm} />
      <Routes>
      <Route path='/search' element={<MovieSearchList key={searchResults.id} movies={searchResults} />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />} />
      <Route path='/' element={<MovieList key={movies.id} movies={movies} />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
