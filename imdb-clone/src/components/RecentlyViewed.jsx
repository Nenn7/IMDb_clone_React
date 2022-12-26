import React from "react";
import { useState, useEffect } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";

function RecentlyViewed() {
  const [recentlyViewedMovies, setRecentlyViewedMovies] = useState([]);

  useEffect(() => {
    const fromLocalStorage = localStorage.getItem("recentlyViewed");
    if (fromLocalStorage) {
      setRecentlyViewedMovies(JSON.parse(fromLocalStorage).reverse());
    }
  }, []);

  return (
    <>
      <MovieHeader heading="Recently Viewed" />
      <MovieList movies={recentlyViewedMovies} />
    </>
  );
}

export default RecentlyViewed;
