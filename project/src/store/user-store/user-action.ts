import {createAction} from '@reduxjs/toolkit';
import { UserType } from '../../types/types';

export const loadAuthInfo = createAction<UserType>('user/loadAuthInfo');
