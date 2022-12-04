import { RentInfo } from '../types/types';

export const offers: RentInfo =
  [
    {
      id: 1,
      title: 'Nice, cozy, warm big bed apartment',
      city: {
        name: 'Amsterdam',
        location: {
          title: 'Amsterdam',
          latitude: 52.37454,
          longitude: 4.897976,
        },
        zoom:10,
      },
      location: {
        title: 'Nice, cozy, warm big bed apartment',
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      src: 'img/apartment-03.jpg',
      price: 1830,
      current: '€',
      type: 'Apartment',
      lable: 'Premium',
      time: 'night',
      srcSmall: 'img/apartment-03-small.jpg',
    }, {
      id: 2,
      title: 'Beautiful & luxurious apartment at great location',
      city: {
        name: 'Amsterdam',
        location: {
          title: 'Amsterdam',
          latitude: 52.37454,
          longitude: 4.897976,
        },
        zoom:10,
      },
      location: {
        title: 'Beautiful & luxurious apartment at great location',
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
      },
      src: 'img/apartment-01.jpg',
      price: 1220,
      current: '€',
      type: 'Apartment',
      lable: 'Premium',
      time: 'night',
      srcSmall: 'img/apartment-01-small.jpg',
    }, {
      id: 3,
      title: 'Wood and stone place',
      city: {
        name: 'Amsterdam',
        location: {
          title: 'Amsterdam',
          latitude: 52.37454,
          longitude: 4.897976,
        },
        zoom:10,
      },
      location: {
        title: 'Wood and stone place',
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
      },
      src: 'img/room.jpg',
      price: 840,
      current: '€',
      type: 'Private room',
      lable: 'good',
      time: 'night',
      srcSmall: 'img/room-small.jpg',
    }, {
      id: 4,
      title: 'Canal View Prinsengracht',
      city: {
        name: 'Amsterdam',
        location: {
          title: 'Amsterdam',
          latitude: 52.37454,
          longitude: 4.897976,
        },
        zoom:10,
      },
      location: {
        title: 'Canal View Prinsengracht',
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
      },
      src: 'img/apartment-02.jpg',
      price: 135,
      current: '€',
      type: 'Apartment',
      lable: 'not bad',
      time: 'night',
      srcSmall: 'img/apartment-02-small.jpg',
    },
  ];
