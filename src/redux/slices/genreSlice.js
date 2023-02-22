import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {genresService} from "../../services/genresService";

const initialState = {
    genres: [],
    loading:null
}

const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genresService.getAll()
            return data.genres;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const genresSlice = createSlice(
    {
        name: 'genresSlice',
        initialState,
        reducers: {
        },
        extraReducers: builder =>
            builder
                .addCase(getAllGenres.fulfilled, (state, action) => {
                    state.genres = action.payload
                })
                .addDefaultCase((state, action) => {
                    const [actionStatus] = action.type.split('/').slice(-1);
                    state.loading = actionStatus === 'pending';
                })


    }
);

const {reducer: genresReducer, actions: {setSelectedGenres}} = genresSlice;

const genresAction = {
    getAllGenres,
    setSelectedGenres
}

export {
    genresAction,
    genresReducer
}