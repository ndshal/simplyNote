import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import currentUserReducer from './current_user_reducer';
import notesReducer from './notes_reducer';
import noteDetailReducer from './note_detail_reducer';
import notebooksReducer from './notebooks_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  errors: errorsReducer,
  notes: notesReducer,
  noteDetail: noteDetailReducer,
  notebooks: notebooksReducer
});

export default rootReducer;
