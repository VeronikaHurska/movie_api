import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";


const initialState = {
    movies: [],
    prevPage: null,
    nextPage: null,
    selectedMovie: null,
    searchMovies: [],
    loading: null,
    videos:{}
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page, with_genres}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page, with_genres);
            return data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async (id, thunkAPI) => {
        try {
            const {data} = await moviesService.getById(id);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'moviesSlice/search',
    async (query, {page}, thunkAPI) => {
        try {
            const {data} = await moviesService.search(query, page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getVideos = createAsyncThunk(
    'moviesSlice/getVideos',
    async (id, thunkAPI) => {
        try {
            const {data} = await moviesService.getVideos(id);
            const state = thunkAPI.getState();
            console.log(state);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
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
            .addCase(getById.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getVideos.fulfilled,(state, action)=>{
                state.videos = action.payload.results
            })

});

const {reducer: movieReducer, actions: {setSelectedMovie}} = moviesSlice;

const moviesActions = {
    getAll,
    setSelectedMovie,
    getById,
    search,
    getVideos
}

export {
    moviesActions,
    movieReducer
}