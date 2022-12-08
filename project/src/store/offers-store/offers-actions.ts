import {createAction} from '@reduxjs/toolkit';
import { OffersType } from '../../types/types';

export const initializeData = createAction('initializeData');

export const loadOffers = createAction<OffersType>('data/loadOffers');