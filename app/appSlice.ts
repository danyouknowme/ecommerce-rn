import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../types/app";

const initialState: IAppState = {
    page: 'home',
};

const AppSlice = createSlice({
    name: "App",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
});

export const { setPage } = AppSlice.actions;
export default AppSlice.reducer;
