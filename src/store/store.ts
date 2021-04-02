import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import reducer from './root-reducer';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer,
  middleware,
});

export default store