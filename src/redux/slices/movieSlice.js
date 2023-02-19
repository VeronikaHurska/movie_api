import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";


const initialState = {
    movies: [],
    prevPage: null,
    nextPage: null,
    selectedMovie: {},
    searchMovies: []
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            await moviesService.getById(id);

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'moviesSlice/search',
    async (query, thunkAPI) => {
        try {
            const {data} = await moviesService.search(query);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedMovie = action.payload
            })
            .addCase(search.fulfilled, (state, action) => {
                state.searchMovies = action.payload
            })

});

const {reducer: movieReducer, actions: {setSelectedMovie}} = moviesSlice;

const moviesActions = {
    getAll,
    setSelectedMovie,
    getById,
    search
}

export {
    moviesActions,
    movieReducer
}