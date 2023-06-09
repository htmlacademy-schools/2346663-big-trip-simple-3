import NewSortView from '../view/sort-view';
import NewFormCreateView from '../view/form-create-view';
import NewListView from '../view/list-view';
//import NewFormEditView from '../view/form-edit-view';
import NewPointView from '../view/point-view';

import { render } from '../render';

import PointsModel from '../model/points-model';

export default class Presenter {

  list = new NewListView();

  init = (container) => {
    this.container = container;

    render(new NewSortView(), this.container);
    render(this.list, this.container);
    render(new NewFormCreateView((new PointsModel).getPoints()[0]), this.list.getElement());
    //render(new NewFormEditView(), this.list.getElement());

    for (const point of (new PointsModel).getPoints()) {
      render(new NewPointView(point), this.list.getElement());
    }
  };
}
