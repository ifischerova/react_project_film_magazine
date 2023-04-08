import React from "react";
import MoviesList from '../MovieList/MovieList';
import './movies.css';
import { Outlet } from "react-router-dom";


const Movies = () => {

    return (
        <div className="movies">
        <h1>Movies</h1>

        <div className="movies-container">
            <MoviesList />
            
            <Outlet />
        </div>
      </div>
    );
};

export default Movies;