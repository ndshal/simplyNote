import { merge } from 'lodash';
import { ContentState, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

export const parseNoteBody = (note) => {
  const newNote = merge({}, note);
  newNote.body = JSON.parse(newNote.body);

  return newNote;
};

export const stringifyNoteBody = (note) => {
  const newNote = merge({}, note);
  newNote.body = JSON.stringify(newNote.body);
  console.log(newNote.body);

  return newNote;
};

export const createEditorNoteBody = (note) => {
  const newNote = merge({}, note);
  let contentState;

  if (typeof newNote.body === 'string') {
    contentState = ContentState.createFromText(newNote.body);
  } else {
    contentState = convertFromRaw(newNote.body);
  }
  const editorState = EditorState.createWithContent(contentState);
  newNote.body = editorState;
  return newNote;
};