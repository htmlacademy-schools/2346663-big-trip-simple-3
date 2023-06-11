import AbstractView from '../framework/view/abstract-view';
import { humanizeDateInDayOfTheMonth } from '../util.js';
import { humanizeDateInTime } from '../util.js';

function createPointTemplate (point) {
  let result = `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${humanizeDateInDayOfTheMonth(point.dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">Flight ${point.destination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T12:25">${humanizeDateInTime(point.dateFrom)}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T13:35">${humanizeDateInTime(point.dateTo)}</time>
      </p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">`;
  if (point.offers) {
    for (const offer of point.offers) {
      result += `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`;
    }
  }
  result += `</ul>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
    </button>
  </div>
  </li>`;

  return result;
}

export default class PointView extends AbstractView {
  constructor(point) {
    super();
    this.point = point;
  }

  get template() {
    return createPointTemplate(this.point);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };

}
