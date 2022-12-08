import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, SortTypes } from '../constants';
import { initializeData, loadOffers } from './offers-store/offers-actions';
import { sortOffers } from './sort-store/sort-actions';
import { OffersType } from '../types/types';

const initialState = {
  offers: <OffersType>[],
  selectedCity: DEFAULT_CITY,
  selectedOffers: <OffersType>[],

  sortType: SortTypes.Popular,
  sortView: 'closed',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(initializeData, (state) => {
      state.selectedCity = DEFAULT_CITY;
      state.selectedOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity.name);
    })
    .addCase(sortOffers, (state) => {
      state.sortType = SortTypes.Popular;
      state.sortView = 'closed';
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
