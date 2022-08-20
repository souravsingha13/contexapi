import React, {createContext, useState}from "react";

export const  MovieContext = createContext();

export const MovieProvider = (props)=>{
    var i = 'light';

    const [movies, setMovies] = useState([
        {
            name : "Harry Potter",
            id : 1,
            theme : 'light'
        },
        {
            name : "Inception",
            id : 2,
            theme : 'light'
        },
        {
            name : "Twelve angry man",
            id : 2,
            theme : 'light'
        }
    ]);
    return(
        <MovieContext.Provider value = {[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}