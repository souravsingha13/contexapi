import React, { useState, useContext} from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () =>{
    const movies = useContext(MovieContext);
    return(
        <div className="movieList">
            {
                movies.map(movie =>(
                        <Movie name = {movie.name} id = {movie.id}/>
                ))
            }
        </div>
    )
}
export default MovieList;