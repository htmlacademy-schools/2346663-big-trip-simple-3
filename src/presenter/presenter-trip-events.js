import SortView from '../view/sort-view';
//import FormCreateView from '../view/form-create-view';
import ListView from '../view/list-view';
import FormEditView from '../view/form-edit-view';
import PointView from '../view/point-view';

import {render} from '../framework/render';

import PointsModel from '../model/points-model';

import EmptyListView from '../view/empty-list-view';
export default class Presenter {

  #list = new ListView();

  init = (container) => {
    this.container = container;

    render(new SortView(), this.container);
    render(this.#list, this.container);

    const points = (new PointsModel).points;

    if (points.length !== 0) {
      for (const point of points) {
        this.#renderPoint(point);
      }
    } else {
      render(new EmptyListView, this.#list.element);
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

    pointComponent.setClickHandler(() => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.setClickHandler(() => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });
    pointEditComponent.setSubmitHandler(() => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });


    render(pointComponent, this.#list.element);
  };
}
