import { createAction } from '@reduxjs/toolkit';
import { OffersType } from '../../types/types';

export const changeCity = createAction<string>('changeCity');
export const resetSort = createAction('resetSort');
export const loadOffers = createAction<OffersType>('data/loadOffers');
export const setLoadingStatus = createAction<boolean>('data/setLoadingStatus');
