import { genereateDestination } from '../mock/destination.js';
import { genereatePoint } from '../mock/point.js';
import { genereateOffers } from '../mock/offer.js';

export default class PointsModel {
  #points = [
    genereatePoint(genereateDestination(), genereateOffers(), 0),
    genereatePoint(genereateDestination(), genereateOffers(), 1),
    genereatePoint(genereateDestination(), genereateOffers(), 2),
    genereatePoint(genereateDestination(), genereateOffers(), 3),
    genereatePoint(genereateDestination(), genereateOffers(), 4),
    genereatePoint(genereateDestination(), genereateOffers(), 5)
  ];

  get points() {
    return this.#points;
  }
}
