import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/movieSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(moviesActions.getAll({page:query.get('page')}))
    }, [dispatch,query]);
    console.log(movies);
    return (
        <div>
            {
                movies.map(movie =><MoviesListCard key={movie.id} movieCard={movie}/>)
            }
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