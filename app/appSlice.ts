import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../types/app";

const initialState: IAppState = {
  page: "home",
  searchInput: null,
  products: null,
  carts: [],
  authUser: null,
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
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export const { setPage, setSearchInput, setProducts, setCarts, setAuthUser } = AppSlice.actions;
export default AppSlice.reducer;
