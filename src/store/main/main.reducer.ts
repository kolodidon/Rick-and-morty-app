import { PayloadAction } from '@reduxjs/toolkit';
import { mainSliceType, itemType } from "../../../type";

export const mainReducer = {
    setInputs: (state: mainSliceType, action: PayloadAction<{nameInput: string, genderInput: string, statusInput: string}>) => {
        state.nameInput = action.payload.nameInput;
        state.genderInput = action.payload.genderInput;
        state.statusInput = action.payload.statusInput;
        state.error = '';
        state.pagesCount = 0;
        state.currentPage = 1;
    },
    setCurrentPage: (state: mainSliceType, action: PayloadAction<number>) => {
        state.currentPage = action.payload;
    },
    addToFavorite: (state: mainSliceType, action: PayloadAction<itemType>) => {
        state.favorites.push(action.payload)
    },
    deleteFromFavorite: (state: mainSliceType, action: PayloadAction<number>) => {
        state.favorites = state.favorites.filter((item) => item.id !== action.payload)
    }
};