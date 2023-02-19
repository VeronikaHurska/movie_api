import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import {MovieInfo} from "../../Components/MovieInfo/MovieInfo";


const MovieDetailsPage = () => {

    return (
        <div>
           <MovieInfo/>
        </div>
    );
};

export {
    MovieDetailsPage
};