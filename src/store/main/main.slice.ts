import { createSlice } from '@reduxjs/toolkit';
import { mainInitialState, mainReducer } from '.';

export const mainSlice = createSlice({
 name: 'main',
 initialState: mainInitialState,
 reducers: mainReducer,
});

export const {
 actions: {
 
 },
} = mainSlice;