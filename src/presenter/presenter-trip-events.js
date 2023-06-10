import SortView from '../view/sort-view';
//import FormCreateView from '../view/form-create-view';
import ListView from '../view/list-view';
import FormEditView from '../view/form-edit-view';
import PointView from '../view/point-view';

import { render } from '../render';

import PointsModel from '../model/points-model';

export default class Presenter {

  #list = new ListView();

  init = (container) => {
    this.container = container;

    render(new SortView(), this.container);
    render(this.#list, this.container);

    for (const point of (new PointsModel).points) {
      this.#renderPoint(point);
    }
  };

  #renderPoint = (point) => {
    const pointComponent = new PointView(point);
    const pointEditComponent = new FormEditView(point);

    const replacePointToForm = () => {
      this.#list.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#list.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });
    pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });


    render(pointComponent, this.#list.element);
  };
}
