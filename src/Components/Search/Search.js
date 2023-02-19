import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/movieSlice";

const Search = () => {

    const {handleSubmit} = useForm();
    const dispatch = useDispatch();

    const {searchMovies} = useSelector(state => state.movies);

    const search = (nameToSearch) => {
       dispatch(moviesActions.search(nameToSearch));
    }
    console.log("sm", searchMovies.results);
    return (
        <form onSubmit={handleSubmit(search)}>
            <input placeholder={"Search movie"}/>
            <button>Search</button>
        </form>
    );
};

export {
    Search
};