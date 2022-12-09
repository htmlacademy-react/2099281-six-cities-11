import { createAction } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { UserType } from '../../types/types';

export const loadAuthInfo = createAction<UserType>('user/loadAuthInfo');
export const getAuthInfo = (state: State): UserType | null => state.authInfo;
