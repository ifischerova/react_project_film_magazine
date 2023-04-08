import React from "react";
import { useParams } from "react-router-dom";
import { movies } from '../../movie-database';
import './movie.css'


const Movie = () => {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id == id);
    
    return (
        <div className="movie">
            <img src={movie.poster} alt={movie.title}/>

            <h2>{movie.title}</h2>
            <ul className="movie-info">
                <li><span className="movie-info-item">Released:</span> {movie.year}</li>
                <li><span className="movie-info-item">Genre:</span> {movie.genre}</li>
                <li><span className="movie-info-item">Rating:</span> {movie.rating}</li>
                <li><span className="movie-info-item">Director:</span> {movie.director}</li>
                <li><span className="movie-info-item">Cast:</span> {movie.cast.map(cast => cast.name).join(', ')}</li>
            </ul>

            <p>{movie.storyline}</p>
        </div>
    );
};

export default Movie;