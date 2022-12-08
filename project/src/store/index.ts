import {configureStore} from '@reduxjs/toolkit';
import {resetSelection} from './offers-store/offers-reducer';
import {createAPI} from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: resetSelection,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});