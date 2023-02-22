import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {StarsRating} from "../StarsRating/StarsRating";

import {PosterPreview} from "../PosterPreview/PosterPreview";

import {moviesActions} from "../../redux/slices/movieSlice";

import css from "./card.module.css"


const MoviesListCard = ({movie}) => {

    const {id, original_title,vote_average} = movie


    const dispatch = useDispatch();
    return (
        <div className={css.card}>
            <Link to={'/movies/' + id.toString()}
                  onClick={() => dispatch(moviesActions.setSelectedMovie(id))}>
                <div className={css.inner}>
                    <div >
                        <PosterPreview movie={movie}/>
                        <p >{original_title}</p>
                    </div>
                    <StarsRating rating={vote_average}/>
                </div>
            </Link>
        </div>
    );
};

export {
    MoviesListCard
};