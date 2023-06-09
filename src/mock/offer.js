const generateOffer = (id) => ({
  id: id,
  title: `Upgrade to ${id}`,
  price: 120 * id
});

const offerTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const genereateOffers = () => ({
  type: offerTypes[Math.floor(Math.random() * offerTypes.length)],
  offers: [generateOffer(1), generateOffer(2), generateOffer(3),]
});
