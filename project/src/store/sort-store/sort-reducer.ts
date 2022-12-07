import {createReducer} from '@reduxjs/toolkit';
import { SortTypes } from '../../constants';
import { sortOffers } from './sort-actions';

const initialState = {
  sortType: SortTypes.Popular,
  sortView: 'closed',

};

const resetSort = createReducer(initialState, (builder) => {
  builder
    .addCase(sortOffers, (state) => {
      state.sortType = SortTypes.Popular;
      state.sortView = 'closed';
    });
});

export {resetSort};
