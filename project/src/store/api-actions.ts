import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AuthData, CommentsType, OffersType, UserType } from '../types/types';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../constants';
import { saveToken, dropToken } from '../services/token';
import { redirectToRoute, setError } from './action';
import { loadOffers, setLoadingStatus } from './offers-store/offers-actions.js';
import { loadAuthInfo } from './user-store/user-action';
import { store } from './';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk<UserType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserType>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserType>(APIRoute.Login, { email, password });
    saveToken(token);
    const { data } = await api.get<UserType>(APIRoute.Login);
    dispatch(loadAuthInfo(data));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data } = await api.get<OffersType>(APIRoute.Offers);
    dispatch(setLoadingStatus(false));
    dispatch(loadOffers(data));

  },
);

export const fetchCommentsAction = createAsyncThunk<CommentsType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<CommentsType>(`${APIRoute.Comments}/${id}`);
    return data
  },
);

export const fetchFavorites = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OffersType>(APIRoute.Favorite);
    return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<OffersType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<OffersType>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);
