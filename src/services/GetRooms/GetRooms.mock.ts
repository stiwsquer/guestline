import { GetRoomsApiResponse } from './GetRooms.types';

const mockRoomsApiResponse: GetRoomsApiResponse = {
  rooms: [
    {
      id: 'DTFF',
      name: 'Deluxe Twin',
      shortDescription:
        'Halvah pastry tart marshmallow croissant chupa chups jelly-o.',
      longDescription:
        'Halvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes tootsie roll lemon drops candy canes.',
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: 'Twin',
      images: [
        {
          url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg',
          alt: '',
        },
        {
          url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg',
          alt: '',
        },
        {
          url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg',
          alt: '',
        },
      ],
      facilities: [
        {
          code: '28',
          name: 'Kitchen Utensils',
        },
        {
          code: '8',
          name: 'Mini Bar',
        },
        {
          code: '25',
          name: 'Jacuzzi Bath',
        },
        {
          code: '15',
          name: '24 Hour Room Service',
        },
        {
          code: '27',
          name: '4 Poster Bed',
        },
        {
          code: '33',
          name: '24 Hour Reception',
        },
        {
          code: '3',
          name: 'TV',
        },
        {
          code: '5',
          name: 'Video',
        },
        {
          code: '4',
          name: 'Telephone',
        },
      ],
    },
    {
      id: 'STND',
      name: 'Double/Twin Standard Double',
      shortDescription:
        'Halvah pastry tart marshmallow croissant chupa chups jelly-o.',
      longDescription:
        'Bear claw marshmallow bear claw tiramisu caramels dragée. Pastry sweet sugar plum sugar plum candy icing tiramisu danish.\r\nHalvah pastry tart marshmallow croissant chupa chups jelly-o. Gummi bears toffee jelly beans jelly pie jujubes danish candy cheesecake. Gummies fruitcake bonbon topping gingerbread lemon drops. Candy canes dragée biscuit fruitcake. Candy canes to',
      occupancy: {
        maxAdults: 2,
        maxChildren: 0,
        maxOverall: 2,
      },
      disabledAccess: false,
      bedConfiguration: 'Both',
      images: [
        {
          url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room4.jpg',
          alt: '',
        },
        {
          url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg',
          alt: '',
        },
        {
          url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg',
          alt: '',
        },
      ],
      facilities: [
        {
          code: '9',
          name: 'Room Service (Restricted Hours)',
        },
        {
          code: '2',
          name: 'High Speed Internet Access',
        },
        {
          code: '19',
          name: 'Hot Tub',
        },
        {
          code: '31',
          name: 'Balcony',
        },
        {
          code: '24',
          name: 'Ironing Facilities',
        },
        {
          code: '11',
          name: 'Radio',
        },
        {
          code: '6',
          name: 'TV / Radio',
        },
        {
          code: '29',
          name: 'Garden',
        },
        {
          code: '8',
          name: 'Mini Bar',
        },
        {
          code: '7',
          name: 'Tea / Coffee Making Facilities',
        },
        {
          code: '12',
          name: 'TV with Satellite channels',
        },
        {
          code: '28',
          name: 'Kitchen Utensils',
        },
        {
          code: '1',
          name: 'Internet Access',
        },
        {
          code: '25',
          name: 'Jacuzzi Bath',
        },
        {
          code: '34',
          name: 'Sea View',
        },
        {
          code: '13',
          name: 'In-room Safe',
        },
        {
          code: '35',
          name: 'Lake View',
        },
        {
          code: '27',
          name: '4 Poster Bed',
        },
        {
          code: '16',
          name: 'Hair Dryer',
        },
        {
          code: '17',
          name: 'Air Conditioning',
        },
        {
          code: '10',
          name: 'Bathrobes',
        },
        {
          code: '15',
          name: '24 Hour Room Service',
        },
        {
          code: '33',
          name: '24 Hour Reception',
        },
        {
          code: '22',
          name: 'iPod Docking Station',
        },
        {
          code: '3',
          name: 'TV',
        },
        {
          code: '5',
          name: 'Video',
        },
        {
          code: '4',
          name: 'Telephone',
        },
      ],
    },
  ],
  ratePlans: [
    {
      id: '24_HOUR',
      shortDescription: '24 Hour Rate - Payment Type Pay Now',
      longDescription:
        'Code: 24_HOUR, Prepayment: Pay now\r\nSome other long added description added recently\r\n\r\nTesting bullet points\r\n1\r\n2\r\n3',
      prePayment: 'Reserve',
      cancellationPolicy: {
        name: 'Free Cancelation',
        text: 'You can cancel when ever you like.',
        penalty: 'Fixed',
        applicable: 'Full Stay',
        amount: 0,
        hour: '10 AM',
      },
    },
    {
      id: 'BAR_BB10',
      shortDescription: '-10% off',
      prePayment: 'First night',
    },
  ],
};

export default mockRoomsApiResponse;
