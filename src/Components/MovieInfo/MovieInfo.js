import React from 'react';
import {useSelector} from "react-redux";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MovieInfo = () => {

    const {selectedMovie} = useSelector(state => state.movies);

    const {poster_path, overview,original_title} = selectedMovie;
    console.log("sm", selectedMovie);


    return (
        <div>
            <p>{original_title.toUpperCase()}</p>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
            </div>
            <GenreBadge />
            <p>DESCRIPTION</p>
            <div>
                {overview}
            </div>
        </div>
    );
};

export {
    MovieInfo
};