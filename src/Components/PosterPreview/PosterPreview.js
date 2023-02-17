import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/movieSlice";

const PosterPreview = ({movie}) => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //
    //     dispatch(moviesActions.setPosterPath(movie.poster_path))
    //
    // }, [dispatch,movie.poster_path]);

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
        </div>
    );
};

export {
    PosterPreview
};