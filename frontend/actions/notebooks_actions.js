import * as NotebookAPIUtil from '../util/notebook_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_SINGLE_NOTEBOOK = 'RECEIVE_SINGLE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const receiveSingleNotebook = notebook => ({
  type: RECEIVE_SINGLE_NOTEBOOK,
  notebook
});

export const removeNotebook = id => ({
  type: REMOVE_NOTEBOOK,
  id
});

export const fetchAllNotebooks = () => dispatch => (
  NotebookAPIUtil.fetchAllNotebooks()
    .then(notebooks => dispatch(receiveAllNotebooks(notebooks)))
);

export const createNotebook = notebook => dispatch => (
  NotebookAPIUtil.createNotebook(notebook)
    .then(
      notebook => dispatch(receiveSingleNotebook(notebook)),
      err => dispatch(receiveErrors('createForm', err.responseJSON))
    )
);

export const deleteNotebook = id => dispatch => (
  NotebookAPIUtil.deleteNote(id)
    .then(notebook => dispatch(removeNotebook(notebook.id)))
);
