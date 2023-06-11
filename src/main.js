import NewFilterView from './view/filter-view';
import Presenter from './presenter/presenter-trip-events';
import {render} from './framework/render';

const filters = document.querySelector('.trip-controls__filters');
const sort = document.querySelector('.trip-events');

const presenter = new Presenter();

render(new NewFilterView(), filters);

presenter.init(sort);
