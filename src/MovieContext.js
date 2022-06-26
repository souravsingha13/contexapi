import React, {createContext, useState}from "react";

export const  MovieContext = createContext();

export const MovieProvider = (props)=>{
    const [movies, setMovies] = useState([
        {
            name : "Harry Potter",
            id : 1
        },
        {
            name : "Game Of Thrones",
            id : 2
        },
        {
            name : "Inception",
            id : 3
        }
    ]);
    return(
        <MovieContext.Provider value = {movies}>
            {props.children}
        </MovieContext.Provider>
    )
}