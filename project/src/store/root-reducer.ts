import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY, SortTypes } from '../constants';
import { resetSort, loadOffers, changeCity } from './offers-store/offers-actions';
import { OffersType, UserType } from '../types/types';
import {checkAuthAction, loginAction, logoutAction} from './api-actions';

type InitialState = {
  authorizationStatus: string,
  authInfo: UserType,
  hasErrorLogin: boolean,

  offers: OffersType,
  selectedCity: string,
  selectedOffers: OffersType,

  sortType: string,
  sortView: string,
};

const initialState : InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: <UserType><unknown>[],
  hasErrorLogin: false,

  offers: [],
  selectedCity: DEFAULT_CITY.name,
  selectedOffers: [],

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
    })
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Authorized;
      state.authInfo = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthorized;
    })
    .addCase(loginAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Authorized;
      state.hasErrorLogin = false;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthorized;
      state.hasErrorLogin = true;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NotAuthorized;
      state.hasErrorLogin = false;
    });
  });

export { rootReducer };
