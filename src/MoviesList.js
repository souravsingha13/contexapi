import React, { useState, useContext} from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () =>{
    const [movies,setMovies] = useContext(MovieContext);
    console.log(movies)
    return(
        <div className="movieList">
            {
                movies.map(movie =>(
                        <Movie name = {movie.name} id = {movie.id} theme = {movie.theme}/>
                ))
            }
        </div>
    )
}
export default MovieList;