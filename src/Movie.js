import React from "react";

const Movie  = ({name, id}) =>{
return(
<div className ="Movie">
    <h3>{id}.{name}</h3>
</div>
)
}
export default Movie;
