import { CityType } from './types/types';

export enum AppRoute{
    Error = '*',
    Root = '/',
    Login = '/login',
    Private = '/private',
    Result = '/result',
    Favorites = '/favorites',
    Room = '/offer/:id',
  }

export enum AuthorizationStatus{
    Authorized = 'true',
    NotAuthorized = 'false'
  }

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const ZOOM_MAP = 13;

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY: CityType = {
  name: 'Amsterdam',
  location: {
    title: 'Amsterdam',
    latitude: 52.37454,
    longitude: 4.897976,
  },
  zoom: 15
};

export enum ImgMarker {
  MarkerDefault = 'img/pin.svg',
  MarkerCurrent = 'img/pin-active.svg'
}

export enum SortTypes {
  Popular = 'Popular',
  PriceHigh = 'Price: low to high',
  PriceLow = 'Price: high to low',
  Rating = 'Top rated first'
}

export const SortTypesArray = [SortTypes.Popular, SortTypes.PriceHigh, SortTypes.PriceLow, SortTypes.Rating];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}