import { createElement } from '../render.js';

const createListListTemplate = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class NewListView {

  getTemplate() {
    return createListListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
