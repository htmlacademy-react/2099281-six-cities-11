export type LocationType = {
  latitude: number
  longitude: number
  zoom: number
}

export type CityType = {
  location: LocationType
  name: string
}

export type HostType = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}

export type OfferType = {
  bedrooms: number
  city: CityType
  description: string
  goods: [string]
  host: HostType
  id: number
  images: [string]
  isFavorite: boolean
  isPremium: boolean
  location: LocationType
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}

export type OffersType = OfferType[];

export type CommentType = {
  comment: string
  date: string
  id: number
  rating: number
  user: HostType
}

export type CommentsType = CommentType[];

export type UserType = {
  avatarUrl: string
  email: string
  id: number
  isPro: boolean
  name: string
  token: string
};

export type AuthData = {
  login: string;
  password: string;
};
