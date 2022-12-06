import {configureStore} from '@reduxjs/toolkit';
import {resetSelection} from './offers-store/offers-reducer';
import {resetSort} from './sort-store/sort-reducer';

export const store = configureStore({
  reducer: {resetSelection, resetSort}
});
