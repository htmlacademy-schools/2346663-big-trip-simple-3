import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import { genereateDestination } from '../mock/destination';
import { humanizeDateInSimpleDate } from '../util';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function createFormEditTemplate (point) {

  let result = `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${point.type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${point.destination.name} list="destination-list-1" autocomplete="off">
        <datalist id="destination-list-1">
          <option value="Amsterdam"></option>
          <option value="Geneva"></option>
          <option value="Chamonix"></option>
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeDateInSimpleDate(point.dateFrom)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDateInSimpleDate(point.dateTo)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">`;

  point.offers.offers.forEach((element, index) => {
    if (point.type === point.offers.type) {
      result += `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="${index}" type="checkbox" name="event-offer-luggage" checked>
    <label class="event__offer-label" for="${index}">
      <span class="event__offer-title">${element.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${element.price}</span>
    </label>
  </div>`;
    }
  });

  result += `        </div>
  </section>

  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${point.destination.description}</p>
  </section>
</section>
</form>
</li>`;

  return result;
}

export default class FormEditView extends AbstractStatefulView {
  #datepickers = [];

  constructor(point) {
    super();
    this._state = FormEditView.parsePointToState(point);

    this.#setInnerHandlers();
    this.#setDatepickers();
  }

  get template() {
    return createFormEditTemplate(this._state);
  }

  setSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#submitHandler);
  };

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  };

  #submitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit();
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };

  static parsePointToState = (point) => ({...point});

  static parseStateToPoint = (state) => ({...state});

  #typeToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({type: evt.target.textContent.toLowerCase()});
  };

  #destinationToggleHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({destination: genereateDestination(evt.target.value)});
  };

  #setInnerHandlers = () => {
    this.element.querySelector('.event__type-group').addEventListener('click', this.#typeToggleHandler);
    this.element.querySelector('#event-destination-1').addEventListener('change', this.#destinationToggleHandler);
    this.element.querySelector('#event-start-time-1').addEventListener('input', this.#textInputHandler);
    this.element.querySelector('#event-end-time-1').addEventListener('input', this.#textInputHandler);
    this.element.querySelector('#event-price-1').addEventListener('input', this.#textInputHandler);
  };

  _restoreHandlers = () => {
    this.#setInnerHandlers();
    this.setClickHandler(this._callback.click);
    this.setSubmitHandler(this._callback.formSubmit);
    this.#setDatepickers();
  };

  #textInputHandler = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    switch (target.id) {
      case 'event-start-time-1':
        this._setState({dateFrom: humanizeDateInSimpleDate(target.value)});
        break;
      case 'event-end-time-1':
        this._setState({dateTo: humanizeDateInSimpleDate(target.value)});
        break;
      case 'event-price-1':
        this._setState({basePrice: target.value});
        break;
    }
  };

  #setDatepickers = () => {
    this.#datepickers = [
      flatpickr(
        this.element.querySelector('#event-start-time-1'),
        {
          enableTime: true,
          'time_24hr': true,
          dateFormat: 'm/d/y H:i',
          defaultDate: this._state.dateFrom,
          onChange: this.#dateFromChangeHandler
        }
      ),
      flatpickr(
        this.element.querySelector('#event-end-time-1'),
        {
          enableTime: true,
          'time_24hr': true,
          dateFormat: 'd/m/y H:i',
          defaultDate: this._state.dateTo,
          onChange: this.#dateToChangeHandler
        }
      )
    ];
  };

  #dateFromChangeHandler = ([userDate]) => {
    this.updateElement({dateFrom: userDate});
  };

  #dateToChangeHandler = ([userDate]) => {
    this.updateElement({dateTo: userDate});
  };

  removeElement = () => {
    super.removeElement();

    if (this.#datepickers) {
      this.#datepickers.forEach((el) => el.destroy());
      this.#datepickers = [];
    }
  };
}
