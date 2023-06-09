const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const genereatePoint = (destination, offers) => ({
  basePrice: 12345,
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: destination,
  id: 0,
  offers: offers.offers,
  type: pointTypes[Math.floor(Math.random() * pointTypes.length)]
});
