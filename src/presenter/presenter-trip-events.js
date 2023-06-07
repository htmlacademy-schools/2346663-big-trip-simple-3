import NewSortView from '../view/sort-view';
import NewFormCreateView from '../view/form-create-view';
import NewListView from '../view/list-view';
import NewFormEditView from '../view/form-edit-view';
import NewPointView from '../view/point-view';

import { render } from '../render';

export default class Presenter {

  list = new NewListView();

  init = (container) => {
    this.container = container;

    render(new NewSortView(), this.container);
    render(new NewFormCreateView(), this.container);
    render(this.list, this.container);
    render(new NewFormEditView(), this.list.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewPointView(), this.list.getElement());
    }
  };
}
