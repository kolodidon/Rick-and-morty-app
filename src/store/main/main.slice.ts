import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { mainInitialState } from "./main.initialState";
import { mainReducer } from "./main.reducer";
import { responseType } from "../../../type";
import { FetchItems } from "../../api/api";
import { StateType } from "../root-reducer";

export const FetchItemsThunk = createAsyncThunk(
    "fetchItems",
    async ({nameInput, genderInput , statusInput, currentPage}: {nameInput: string, genderInput: string , statusInput: string, currentPage: number}, thunkAPI) => {
      const response = await FetchItems({nameInput, genderInput , statusInput, currentPage});
      return response;
    }
  );

export const mainSlice = createSlice({
  name: "main",
  initialState: mainInitialState,
  reducers: mainReducer,
  extraReducers: (builder) => {
    builder.addCase(FetchItemsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(FetchItemsThunk.fulfilled,
      (state, action: PayloadAction<responseType>) => {
        state.isLoading = false;
        state.items = action.payload.results
        state.pagesCount = action.payload.info.pages
      }
    );
    builder.addCase(FetchItemsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  actions: {
    setInputs: setInputsAC,
    setCurrentPage: setCurrentPageAC
  },
} = mainSlice;

export const itemsSelector = (state: StateType) => state.main.items;
export const errorSelector = (state: StateType) => state.main.error;
export const isLoadingSelector = (state: StateType) => state.main.isLoading;

export const nameInputSelector = (state: StateType) => state.main.nameInput;
export const genderInputSelector = (state: StateType) => state.main.genderInput;
export const statusInputSelector = (state: StateType) => state.main.statusInput;

export const pagesCountSelector = (state: StateType) => state.main.pagesCount;
export const currentPageSelector = (state: StateType) => state.main.currentPage;