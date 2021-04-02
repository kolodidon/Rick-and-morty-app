import { PayloadAction } from '@reduxjs/toolkit';
import { mainSliceType } from "../../../type";

export const mainReducer = {
    setInputs: (state: mainSliceType, action: PayloadAction<{nameInput: string, genderInput: string, statusInput: string}>) => {
        state.nameInput = action.payload.nameInput;
        state.genderInput = action.payload.genderInput;
        state.statusInput = action.payload.statusInput;
        state.error = '';
    }
};