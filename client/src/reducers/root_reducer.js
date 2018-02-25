import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
// import errors from './errors_reducer';
import authReducer from './auth_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  currentUser: authReducer
});

export default RootReducer;
