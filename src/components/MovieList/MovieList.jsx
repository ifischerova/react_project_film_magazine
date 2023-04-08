import React from "react";
import './movie_list.css';
import movies from '../../movie-database.js';
import { NavLink } from "react-router-dom";

const Movies_List = () => {
    
    return (
        <nav className="movie-list">
            {movies.map((movie) => <NavLink to={`/movies/${movie.id}`}>
            {movie.title}
            </NavLink>)
            }
        </nav>
    );
};

export default  Movies_List;