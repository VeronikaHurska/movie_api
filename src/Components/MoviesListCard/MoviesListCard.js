import React from 'react';

import {Link} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";

import css from "./card.module.css"

import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux/slices/movieSlice";


const MoviesListCard = ({movie}) => {

    const {id, original_title} = movie

    const dispatch = useDispatch();
    return (
        <div className={css.card}>
            <Link to={'/movies/' + id.toString()} state={movie}
                  onClick={() => dispatch(moviesActions.setSelectedMovie(movie))}>
                <div className={css.inner}>
                    <PosterPreview movie={movie}/>
                    <p>{original_title}</p>
                </div>
            </Link>
        </div>
    );
};

export {
    MoviesListCard
};