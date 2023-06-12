import SortView from '../view/sort-view';
//import FormCreateView from '../view/form-create-view';
import ListView from '../view/list-view';
import PointPresenter from './point-presenter';
import {render} from '../framework/render';
import PointsModel from '../model/points-model';
import EmptyListView from '../view/empty-list-view';
import {sortByDay, sortByPrice} from '../util';
export default class Presenter {
  #list = new ListView();
  #sortComponent = new SortView();
  #emptyListComponent = new EmptyListView();
  #points = new PointsModel().points;
  #map = new Map();
  #currentSortType = 'sort-day';

  #renderSort = () => {
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
    render(this.#sortComponent, this.container);
  };

  #renderList = () => {
    render(this.#list, this.container);
  };

  #renderEmptyList = () => {
    render(this.#emptyListComponent, this.#list.element);
  };

  #renderPoints = () => {
    if (this.#points.length === 0) {
      this.#renderEmptyList();
    } else {
      for (const point of this.#points) {
        this.#renderPoint(point);
      }
    }
  };

  init = (container) => {
    this.container = container;

    this.#renderSort();
    this.#renderList();
    this.#renderPoints();
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#list.element, this.#handleModeChange);
    pointPresenter.init(point);
    this.#map.set(point.id, pointPresenter);
  };

  #handleModeChange = () => {
    this.#map.forEach((presenter) => presenter.resetView());
  };

  #destroyPoints = () => {
    for (const point of this.#map.values()) {
      point.destroy();
    }
  };

  #sortPoints = (sortType) => {
    switch (sortType) {
      case 'sort-day':
        this.#points.sort(sortByDay);
        break;
      case 'sort-price':
        this.#points.sort(sortByPrice);
        break;
    }
    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if(this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#destroyPoints();
    this.#renderPoints();
  };
}
