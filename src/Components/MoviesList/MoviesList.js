import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {useSearchParams} from "react-router-dom";


import {moviesActions} from "../../redux/slices/movieSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MovieList.module.css'

const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        const resp = dispatch(moviesActions.getAll({page:query.get('page')}));
        console.log("resp",resp);
    }, [dispatch,query]);

    console.log(movies);
    return (
        <div>
            <div className={css.listOnPage}>
                {
                    movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
                }
            </div>
            <div>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
        </div>
    );
};

export {
    MoviesList
};