import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";


const initialState = {
    movies: [],
    prevPage: null,
    nextPage: null,
    selectedMovie: null
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

});

const {reducer: movieReducer, actions: {setSelectedMovie}} = moviesSlice;

const moviesActions = {
    getAll,
    setSelectedMovie
}

export {
    moviesActions,
    movieReducer
}