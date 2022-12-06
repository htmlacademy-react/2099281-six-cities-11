import {createReducer} from '@reduxjs/toolkit';
import { DEFAULT_CITY} from '../../constants';
import {initializeData} from './offers-actions';
import {offers} from '../../mocks/offers';
import {RentInfo} from '../../types/types';

const initialState = {
  offers : [...offers],
  selectedCity: DEFAULT_CITY,
  selectedOffers: <RentInfo>[],
};

const resetSelection = createReducer(initialState, (builder) => {
  builder
    .addCase(initializeData, (state) => {
      state.selectedCity = DEFAULT_CITY;
      state.selectedOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity.name);
    });
});

export {resetSelection};
