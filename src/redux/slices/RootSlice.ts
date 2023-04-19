import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        unit_name: "Unit Name",
        unit_description: "Unit Description",
        unit_format: "Unit Format",
        unit_year: "Unit Year",
        unit_tone: "Unit Tone",
        unit_genre: "Unit Genre",
        unit_rating: "Unit Rating",
        key_actors: "Key Actors",
    },
    reducers: {
        chooseUnitName: (state, action) => { state.unit_name = action.payload },
        chooseUnitDescription: (state, action) => { state.unit_description = action.payload },
        chooseUnitFormat: (state, action) => { state.unit_format = action.payload },
        chooseUnitYear: (state, action) => { state.unit_year = action.payload },
        chooseUnitTone: (state, action) => { state.unit_tone = action.payload },
        chooseUnitGenre: (state, action) => { state.unit_genre = action.payload },
        chooseUnitRating: (state, action) => { state.unit_rating = action.payload },
        chooseKeyActors: (state, action) => { state.key_actors = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseUnitName, chooseUnitDescription, chooseUnitFormat, chooseUnitYear, chooseUnitTone, chooseUnitGenre, chooseUnitRating, chooseKeyActors } = rootSlice.actions;