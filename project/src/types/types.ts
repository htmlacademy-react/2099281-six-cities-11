export type Location = {
  title: string;
  latitude: number;
  longitude: number;
}

export type CityType = {
  location: Location;
  name: string;
  zoom: number;
}

export type CardType = {
    id: number;
    title: string;
    city: CityType;
    location: Location;
    src: string;
    price: number;
    current: string;
    type: string;
    lable: string;
    time: string;
    srcSmall: string;
  };

export type RentInfo = CardType[];

export type ReviewType = {
  id: number;
  name: string;
  src: string;
  text: string;
  date: string;
};

export type ReviewsInfo = ReviewType[];
