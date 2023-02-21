import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux/slices/movieSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";

import css from './search.module.css'
import {Genres} from "../Genres/Genres";

const Search = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();

    const {searchMovies} = useSelector(state => state.movies);

    const search = async (nameToSearch) => {
        console.log("name", nameToSearch.search);
        await dispatch(moviesActions.search(nameToSearch.search, {page: query.get('page')}));
    }


    console.log("sm", searchMovies);

    const {page, results} = searchMovies;
    console.log(page);

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
                    results && results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>
            <button onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev</button>
            <button onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next</button>
        </div>
    );
};

export {
    Search
};