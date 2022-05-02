import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../types/app";

const initialState: IAppState = {
    page: 'home',
    searchInput: null,
};

const AppSlice = createSlice({
    name: "App",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        }
    },
});

export const { setPage, setSearchInput } = AppSlice.actions;
export default AppSlice.reducer;
