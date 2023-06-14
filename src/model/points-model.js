import { genereateDestination } from '../mock/destination.js';
import { genereatePoint } from '../mock/point.js';
import { genereateOffers } from '../mock/offer.js';

export default class PointsModel {
  #points = [
    genereatePoint(genereateDestination('Chamonix'), genereateOffers(), 0),
    genereatePoint(genereateDestination('Chamonix'), genereateOffers(), 1),
    genereatePoint(genereateDestination('Chamonix'), genereateOffers(), 2),
    genereatePoint(genereateDestination('Chamonix'), genereateOffers(), 3),
    genereatePoint(genereateDestination('Chamonix'), genereateOffers(), 4),
    genereatePoint(genereateDestination('Chamonix'), genereateOffers(), 5)
  ];

  get points() {
    return this.#points;
  }
}
