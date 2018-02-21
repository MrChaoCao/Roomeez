import { combineReducers } from 'redux';
import entities from './entities_reducer';
// import errors from './errors_reducer';
import authReducer from './auth_reducer';

const RootReducer = combineReducers({
  entities: entities,
  auth: authReducer
});

export default RootReducer;
