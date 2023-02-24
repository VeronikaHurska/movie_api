import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";


import {moviesActions} from "../../redux/slices/movieSlice";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Genres} from "../Genres/Genres";

import {genresService} from "../../services/genresService";
import css from './MovieList.module.css'

const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const [selectedGenres, setSelectedGenres] = useState([]);
    const location = useLocation();


    if (location.pathname === '/movies') {
        localStorage.setItem("movieName", '')
    }


    let genresToFilter = genresService.genresToRequest(selectedGenres);

    useEffect(() => {
        dispatch(moviesActions.getAll({with_genres: genresToFilter, page: query.get('page')}));
    }, [dispatch, query, genresToFilter]);


    console.log(movies);
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
                <button disabled={+query.get('page') - 1 === 0} className={css.button}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>Previous page
                </button>
                <button className={css.button} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next page</button>
            </div>
        </div>
    );
};

export {
    MoviesList
};
