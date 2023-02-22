import React from 'react';

import "./poster.css"

const PosterPreview = ({movie}) => {

    const {poster_path,original_title} = movie
    return (
        <div >
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} className={"img"} alt={original_title}/>
        </div>
    );
};

export {
    PosterPreview
};