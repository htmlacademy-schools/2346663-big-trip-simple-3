import FilterFormView from './view/filter-view.js';
import TripPresenter from './presenter/presenter-trip-events.js';
import {render} from './framework/render.js';
import PointsModel from './model/points-model.js';
import { generateFilter } from './mock/mock.js';

const tripEventsContainer = document.querySelector('.trip-events');
const filterFormContainer = document.querySelector('.trip-controls__filters');

const pointsModel = new PointsModel();
const tripPointsPresenter = new TripPresenter(tripEventsContainer, pointsModel);

const filters = generateFilter(pointsModel.points);

render(new FilterFormView(filters), filterFormContainer);
tripPointsPresenter.init();
