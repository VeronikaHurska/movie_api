import React from 'react';
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/movieSlice";
import {useNavigate} from "react-router-dom";

const MoviesListCard = ({movieCard}) => {

    const {id, original_title} = movieCard

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selectMovie = (id) => {

    }

    return (
        <div onClick={()=> selectMovie(id)}>
            <PosterPreview movie={movieCard}/>
            {id} -- {original_title}
        </div>
    );
};

export {
    MoviesListCard
};