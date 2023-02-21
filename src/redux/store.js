import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genresReducer} from "./slices/genreSlice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genresReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}