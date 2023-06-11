import AbstractView from '../framework/view/abstract-view';

const createListListTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class ListView extends AbstractView {
  get template() {
    return createListListTemplate();
  }
}
