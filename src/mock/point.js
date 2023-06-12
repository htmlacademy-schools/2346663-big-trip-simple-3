export const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const genereatePoint = (destination, offers, id) => ({
  basePrice: 12345,
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: destination,
  id: id,
  offers: offers.offers,
  type: TYPES[Math.floor(Math.random() * TYPES.length)]
});
