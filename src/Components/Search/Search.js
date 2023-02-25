import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import { useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux/slices/movieSlice";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


import css from './search.module.css'


const Search = () => {

    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();
    const {searchMovies} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page: '1'});

const {total_pages} = searchMovies;

    const search = (nameToSearch) => {
        localStorage.setItem("movieName", nameToSearch.search)
        setQuery({page: '1'})
    }

    const movieName = localStorage.getItem("movieName");
    console.log(movieName);

    useEffect(() => {
        dispatch(moviesActions.search({query: movieName, page: query.get('page')}));
    }, [movieName, dispatch, query]);

    console.log("sm",searchMovies);
    return (
        <div>
            <div className={css.Form}>
                <form onSubmit={handleSubmit(search)}>
                    <div className={css.inputWrapper}>
                        <input placeholder={"Search movie"} {...register('search')} />
                    </div>
                    <button className={css.button}>Search</button>
                </form>
            </div>

            <div className={css.List}>
                {
                    searchMovies.results && searchMovies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>
            <button  className={css.button} disabled={+query.get('page') - 1 === 0} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>PREVIOUS PAGE
            </button>
            <button className={css.button}  disabled={+query.get('page')  === total_pages} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>NEXT PAGE</button>
        </div>
    );
};

export {
    Search
};
