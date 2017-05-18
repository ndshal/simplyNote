import { RECIEVE_SINGLE_NOTE } from '../actions/notes_actions';
import { merge } from 'lodash';

const _emptyNote = {
  id: -1,
  title: '',
  body: '',
  notebook_id: -1
};

const noteDetailReducer = (state = _emptyNote, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_SINGLE_NOTE:
      console.log('receiving new noteDetail');
      return action.note;
    default:
      return state;
  }
};

export default noteDetailReducer;
