import React, {useEffect} from 'react';

import css from './genres.module.css'
import {genresAction} from "../../redux/slices/genreSlice";
import {useDispatch, useSelector} from "react-redux";


const Genres = ({setSelectedGenres,selectedGenres}) => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);


    useEffect(() => {
        dispatch(genresAction.getAllGenres());
    }, [dispatch]);

    const addGenres = (genre) => {
       setSelectedGenres([...selectedGenres,genre])
    }


    return (
        <div className={css.genreTags}>
            {
                genres.map(genre =>
                    <div key={genre.id}
                         onClick={() => addGenres(genre)}
                    >
                        {genre.name}
                    </div>)
            }
        </div>
    );
};

export {
    Genres
};