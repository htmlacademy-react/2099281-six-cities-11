export type RentCard = {
    title: string;
    src: string;
    price: number;
    current: string;
    type: string;
    lable: string;
    time: string;
    srcSmall: string;
    id: number;
  };
  export type RentCards = {
    offers: RentCard[];
  };

  export type RentInfo = RentCards[];

  export type RoomReview = {
    id: number;
    name: string;
    src: string;
    text: string;
    date: string;
  };

  export type RoomReviews = {
    reviewsviews: RoomReview[];
  };

  export type ReviewsInfo = RoomReviews[];