import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import currentUserReducer from './current_user_reducer';
import notesReducer from './notes_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer,
  notes: notesReducer,
});

export default rootReducer;
