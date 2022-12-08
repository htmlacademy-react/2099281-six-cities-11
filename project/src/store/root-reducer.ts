import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, SortTypes } from '../constants';
import { resetSort, loadOffers, changeCity } from './offers-store/offers-actions';
import { OffersType } from '../types/types';

const initialState = {
  authInfo: null,

  offers: <OffersType>[],
  selectedCity: DEFAULT_CITY.name,
  selectedOffers: <OffersType>[],

  sortType: SortTypes.Popular,
  sortView: 'closed',
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity = action.payload;
      state.selectedOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity);
    })
    .addCase(resetSort, (state) => {
      state.sortType = SortTypes.Popular;
      state.sortView = 'closed';
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { rootReducer };
