import { combineReducers } from 'redux';
import entities from './entitiesReducer';
// import errors from './errors_reducer';

const RootReducer = combineReducers({
  entities: entities
});

export default RootReducer;
