import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../constants';

export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');
export const setError = createAction<string|null>('page/setError');
