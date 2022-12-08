import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {AuthData, UserType} from '../types/types';
import {APIRoute, AppRoute} from '../constants';
import {saveToken} from '../services/token';
import {redirectToRoute} from './action';


export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data: {token}} = await api.post<UserType>(APIRoute.Login, {email, password});
      saveToken(token);
      const {data} = await api.get<UserType>(APIRoute.Login);
      //dispatch(loadAuthInfo({authInfo: data}));
      dispatch(redirectToRoute(AppRoute.Root));
    },
  );