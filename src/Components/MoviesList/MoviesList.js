import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {useSearchParams} from "react-router-dom";


import {moviesActions} from "../../redux/slices/movieSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MovieList.module.css'
import {Genres} from "../Genres/Genres";
import {genresService} from "../../services/genresService";

const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1',with_genres:''});
    const [selectedGenres, setSelectedGenres] = useState([]);


    let genresToFilter = genresService.genresToRequest(selectedGenres);
    console.log(genresToFilter);


    useEffect(() => {
        dispatch(moviesActions.getAll({with_genres:genresToFilter,page: query.get('page')}));
    }, [dispatch, query, genresToFilter]);



    return (
        <div>
            <div className={css.GenresList}>
                <Genres selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
            </div>
            <div className={css.listOnPage}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>
            <div>
                <button onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev</button>
                <button onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next</button>
            </div>
        </div>
    );
};

export {
    MoviesList
};