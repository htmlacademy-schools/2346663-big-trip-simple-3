import { TYPES } from './point';

const generateOffer = (id) => ({
  id: id,
  title: `Upgrade to ${id}`,
  price: 120 * id
});


export const genereateOffers = () => ({
  type: TYPES[Math.floor(Math.random() * TYPES.length)],
  offers: [generateOffer(1), generateOffer(2), generateOffer(3), generateOffer(4), generateOffer(5)]
});
