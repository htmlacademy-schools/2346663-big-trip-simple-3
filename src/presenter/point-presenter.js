import PointView from '../view/point-view';
import FormEditView from '../view/form-edit-view';
import {remove, render, replace} from '../framework/render';

const MODE = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointComponent = null;
  #pointEditComponent = null;
  #list = null;
  #mode = MODE.DEFAULT;
  #changeMode = null;

  constructor(list, changeMode) {
    this.#list = list;
    this.#changeMode = changeMode;
  }

  init = (point) => {
    this.point = point;

    this.#pointComponent = new PointView(point);
    this.#pointEditComponent = new FormEditView(point);

    this.#pointComponent.setClickHandler(this.#handleEditClick);
    this.#pointEditComponent.setClickHandler(this.#handleFormSubmit);
    this.#pointEditComponent.setSubmitHandler(this.#handleFormSubmit);

    render(this.#pointComponent, this.#list);
  };

  #replacePointToForm = () => {
    this.#changeMode();
    replace(this.#pointEditComponent, this.#pointComponent);
    this.#mode = MODE.EDITING;
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    this.#mode = MODE.DEFAULT;
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
    document.addEventListener('keydown', this.#onEscKeyDown);
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };

  resetView = () => {
    if (this.#mode !== MODE.DEFAULT) {
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  destroy = () => {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  };
}
