import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import currentUserReducer from './current_user_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer
});

export default rootReducer;
