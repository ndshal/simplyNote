import * as NoteAPIUtil from '../util/note_api_util';
import { stringifyNoteBody, parseNoteBody } from '../util/note_conversion_util.js';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_SINGLE_NOTE = 'RECEIVE_SINGLE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveSingleNote = note => ({
  type: RECEIVE_SINGLE_NOTE,
  note
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id
});

export const fetchAllNotes = filter => dispatch => (
  NoteAPIUtil.fetchAllNotes(filter)
    .then(notes => dispatch(receiveAllNotes(notes)))
);

export const fetchSingleNote = id => dispatch => (
  NoteAPIUtil.fetchSingleNote(id)
    .then(note => dispatch(receiveSingleNote(parseNoteBody(note))))
);

export const createNote = note => dispatch => (
  NoteAPIUtil.createNote(stringifyNoteBody(note))
    .then(
      note => dispatch(receiveSingleNote(parseNoteBody(note))),
      err => dispatch(receiveErrors('createForm', err.responseJSON))
    )
    .then(() => dispatch(clearErrors()))
);

export const updateNote = note => dispatch => (
  NoteAPIUtil.updateNote(stringifyNoteBody(note))
    .then(note => dispatch(receiveSingleNote(parseNoteBody(note))))
);

export const deleteNote = id => dispatch => (
  NoteAPIUtil.deleteNote(id)
    .then(note => dispatch(removeNote(note.id)))
);
