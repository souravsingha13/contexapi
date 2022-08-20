import React from "react";

const Movie  = ({name, id,theme}) =>{
return(
<div className ="Movie">
    <h3>{id}.{name}.{theme}</h3>
</div>
)
}
export default Movie;
