import { merge } from 'lodash';
import {
  ContentState,
  EditorState,
  convertFromRaw,
  convertToRaw
} from 'draft-js';

export const parseNoteBody = (note) => {
  const newNote = merge({}, note);
  newNote.body = JSON.parse(newNote.body);

  return newNote;
};

export const stringifyNoteBody = (note) => {
  const newNote = merge({}, note);
  newNote.body = JSON.stringify(newNote.body);

  return newNote;
};

export const createEditorNoteBody = (note, decorator) => {
  const newNote = merge({}, note);
  let contentState;

  if (typeof newNote.body === 'string') {
    contentState = ContentState.createFromText(newNote.body);
  } else {
    contentState = convertFromRaw(newNote.body);
  }
  const editorState = EditorState.createWithContent(contentState, decorator);
  newNote.body = editorState;
  newNote.loaded = true;

  return newNote;
};

export const createRawNoteBody = (note) => {
  const newNote = merge({}, note);
  newNote.body = convertToRaw(newNote.body.getCurrentContent());
  newNote.saved = true;

  return newNote;
};

export const createEmptyNote = (currentPath, decorator) => {
  const notebookMatch = currentPath.match(/home\/notebook\/(\d+)/);
  let notebook_id = null;
  if(notebookMatch) {
    notebook_id = parseInt(notebookMatch[1]);
  }

  return {
    id: null,
    title: '',
    body: EditorState.createEmpty(decorator),
    notebook_id,
    tag_names: [],
    saved: false,
    loaded: true,
  };
};
