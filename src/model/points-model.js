import { genereateDestination } from '../mock/destination.js';
import { genereatePoint } from '../mock/point.js';
import { genereateOffers } from '../mock/offer.js';

export default class PointsModel {
  #points = [
    genereatePoint(genereateDestination(), genereateOffers()),
    genereatePoint(genereateDestination(), genereateOffers()),
    genereatePoint(genereateDestination(), genereateOffers()),
    genereatePoint(genereateDestination(), genereateOffers()),
    genereatePoint(genereateDestination(), genereateOffers()),
    genereatePoint(genereateDestination(), genereateOffers())
  ];

  get points() {
    return this.#points;
  }

  //getPoints = () => this.points;
}
