import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../types/app";

const initialState: IAppState = {
    page: 'home',
    searchInput: null,
    products: null,
    carts: []
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
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCarts: (state, action) => {
            state.carts = action.payload;
        }
    },
});

export const { setPage, setSearchInput, setProducts, setCarts } = AppSlice.actions;
export default AppSlice.reducer;
