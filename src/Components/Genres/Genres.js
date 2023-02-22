import React, {useEffect} from 'react';

import css from './genres.module.css'

import {genresAction} from "../../redux/slices/genreSlice";
import {useDispatch, useSelector} from "react-redux";

import {Chip} from "@mui/material";
import {moviesActions} from "../../redux/slices/movieSlice";

const Genres = ({setSelectedGenres, selectedGenres}) => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);


    useEffect(() => {
        dispatch(genresAction.getAllGenres());
    }, [dispatch]);

    const addGenres = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        genres.filter(eg => eg.id !== genre.id)
        console.log("gg",genres);
        dispatch(genresAction.getAllGenres())
    }

    const removeGenres = genre => {
        setSelectedGenres(
            selectedGenres.filter(selected => selected.id !== genre.id)
        )
        moviesActions.getAll(selectedGenres)
    }


    return (

            <div className={css.genreTags}>
                {
                    selectedGenres?.map((genre) => <Chip key={genre.id} label={genre.name} onDelete={() => removeGenres(genre)}
                    style={{backgroundColor:"lightgray", padding: 10, margin: 2}}
                    />)
                }
                {
                    genres.map(genre => {
                        return <Chip onClick={() => addGenres(genre)}
                                     key={genre.id}
                                     label={genre.name}
                                     style={{backgroundColor: 'orange', padding: 10, margin: 2}}
                        />
                    })
                }
            </div>

    );
};

export {
    Genres
};